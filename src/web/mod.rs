use crate::cache::CacheMap;
use rocket_contrib::templates::Template;
use serde::Serialize;
use rocket::{get, State};

pub mod error;
pub mod index;
pub mod about;
pub mod cv;
pub mod blog;

pub use blog::PostCache;

#[derive(Serialize, Clone)]
pub struct PageContext {
    page: String
}

pub type PageCache = CacheMap<PageContext>;

#[get("/pages/<page>")]
pub fn get_page(page: String, cache: State<PageCache>) -> Option<Template> {
    get_page_inner(&page, cache, "page")
}


fn create_page_template(page_context: PageContext, template_file: &'static str) -> Template {
    Template::render(template_file, &page_context)
}

fn render_markdown_for_page(page: String, cache: &State<PageCache>) -> Option<PageContext> {
    let file = format!("data/pages/{}.md", page);
    crate::markdown::file_to_html(&file)
        .ok()
        .map(|contents| {
            let context = PageContext { page: contents };
            cache.set_item(page, context)
        })
}

fn get_page_inner(page: &str, cache: State<PageCache>, template_file: &'static str) -> Option<Template> {
    let page = String::from(page);

    cache.get_item(&page)
        .or(render_markdown_for_page(page, &cache))
        .map(|context| create_page_template(context, template_file))
}

