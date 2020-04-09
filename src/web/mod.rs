use crate::cache::CacheMap;
use crate::blog::{BlogPost, BlogListing, AllBlogPostListings};
use rocket_contrib::templates::Template;
use serde::{Serialize, Deserialize};
use rocket::{get, State};
use std::vec::Vec;
use std::fs::File;
use std::path::Path;
use std::io::{prelude::*, BufReader};

pub mod error;

#[derive(Serialize)]
struct IndexContext {
    posts: Vec<BlogListing>
}

#[derive(Serialize, Clone)]
pub struct PostContext {
    post: BlogPost
}

#[derive(Serialize, Clone)]
pub struct PageContext {
    page: String
}

#[derive(Serialize, Deserialize)]
pub struct CVItem {
    name: String,
    title: String,
    time: String,
    description: String,
    technologies: Vec<String>
}

#[derive(Serialize, Deserialize)]
pub struct AboutPageContext {
    items: Vec<CVItem>
}

pub type PostCache = CacheMap<PostContext>;
pub type PageCache = CacheMap<PageContext>;

#[get("/")]
pub fn index(cache: State<AllBlogPostListings>) -> Option<Template> {
    let posts = cache.cache_or_load("data/posts/posts.json");

    match posts {
        Err(e) => None,
        Ok(posts) => {
            let size = posts.len();
            let limit = if size > 8 {
                8
            } else {
                size
            };
            let slice: &[BlogListing] = &posts[0..limit];
            let limited_posts = slice.to_vec();
            let context = IndexContext { posts: limited_posts };
            Some(Template::render("index", &context))
        }
    }
}

#[get("/pages/<page>")]
pub fn get_page(page: String, cache: State<PageCache>) -> Option<Template> {
    get_page_inner(&page, cache)
}

#[get("/about")]
pub fn about() -> Option<Template> {
    // todo: Cache this
    match File::open("data/cv.json") {
        Err(e) =>{
            println!("Failed to load cv.json\n{:?}", e);
            None
        },
        Ok(file) => {
            let reader = BufReader::new(file);
            match serde_json::from_reader(reader) {
                Err(e) => {
                    println!("Failed to convert from reader.\n{:?}", e);
                    None
                },
                Ok(data) => {
                    let context: AboutPageContext = data;
                    Some(Template::render("about", &context))
                }
            }
        }
    }
}

#[get("/blog")]
pub fn blog(cache: State<PageCache>) -> Option<Template> {
    get_page_inner("blog", cache)
}

fn get_page_inner(page: &str, cache: State<PageCache>) -> Option<Template> {
    let page = String::from(page);
    let file = format!("data/pages/{}.md", page);

    match cache.get_item(&page) {
        Some(page) => Some(Template::render("page", &page)),
        None => {
            match crate::markdown::file_to_html(&file) {
                Err(_) => None,
                Ok(contents) => {
                    let context = PageContext { page: contents };
                    let context = cache.set_item(page, context);
                    Some(Template::render("page", &context))
                }
            }
        }
    }
}


#[get("/blog/<post>")]
pub fn post(post: String, cache: State<PostCache>) -> Option<Template> {
    let file = format!("data/posts/{}.md", post);

    match cache.get_item(&file) {
        Some(post) => Some(Template::render("post", &post)),
        None => {
            match BlogPost::from_file(&file) {
                Err(_) => None,
                Ok(post) => {
                    let context = PostContext { post };
                    let context = cache.set_item(file, context);
                    Some(Template::render("post", &context))
                }
            }
        }
    }
}