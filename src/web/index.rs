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

fn get_posts(posts: &Vec<BlogListing>, len: usize) -> Vec<BlogListing> {
    let limit= get_limit(len);
    let slice: &[BlogListing] = &posts[0..limit];
    slice.to_vec()
}

fn create_index_template(posts: Vec<BlogListing>) -> Template {
    let post_count = posts.len();
    let posts = if post_count == 0 { Vec::new() } else { get_posts(&posts, post_count )};
    let context = IndexContext { posts };
    Template::render("index", &context)
}

#[get("/")]
pub fn index(cache: State<AllBlogPostListings>) -> Option<Template> {
    cache.cache_or_load("data/posts/posts.json").map(|posts| create_index_template(posts))
}