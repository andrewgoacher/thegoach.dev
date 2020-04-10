use crate::blog::{BlogListing, AllBlogPostListings};
use rocket_contrib::templates::Template;
use rocket::{get, State};
use serde::Serialize;

#[derive(Serialize)]
struct IndexContext {
    posts: Vec<BlogListing>
}

fn get_limit(size: usize) -> usize {
    if size > 8 { 8 } else { size }
}

fn create_index_template(posts: Vec<BlogListing>) -> Template {
    let limit= get_limit(posts.len());
    let slice: &[BlogListing] = &posts[0..limit];
    let posts = slice.to_vec();
    let context = IndexContext { posts };
    Template::render("index", &context)
}

#[get("/")]
pub fn index(cache: State<AllBlogPostListings>) -> Option<Template> {
    cache.cache_or_load("data/posts/posts.json").map(|posts| create_index_template(posts))
}