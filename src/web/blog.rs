use rocket_contrib::templates::Template;
use serde::Serialize;
use rocket::{get, State};
use crate::blog::BlogPost;
use crate::cache::CacheMap;
use crate::web::PageCache;

#[derive(Serialize, Clone)]
pub struct PostContext {
    post: BlogPost
}

pub type PostCache = CacheMap<PostContext>;

#[get("/blog")]
pub fn blog(cache: State<PageCache>) -> Option<Template> {
    super::get_page_inner("blog", cache)
}

fn create_blog_post_page(post_context: PostContext) -> Template {
    Template::render("post", &post_context)
}

fn load_context_from_file(file:String, cache: &State<PostCache>) -> Option<PostContext> {
    BlogPost::from_file(&file)
        .ok()
        .map(|post| {
            let context = PostContext { post };
            let context = cache.set_item(file, context);
            context
        })
}

#[get("/blog/<post>")]
pub fn post(post: String, cache: State<PostCache>) -> Option<Template> {
    let file = format!("data/posts/{}.md", post);
    cache.get_item(&file)
        .or(load_context_from_file(file, &cache))
        .map(|context| create_blog_post_page(context))
}