use rocket_contrib::templates::Template;
use serde::{Serialize, Deserialize};
use rocket::get;

#[derive(Serialize, Deserialize)]
struct AboutPageContext {
    page: String
}

fn create_about_page(contents:String) -> Template {
    let context = AboutPageContext { page: contents };
    Template::render("about", &context)
}

#[get("/about")]
pub fn about() -> Option<Template> {
    let page = "data/pages/about.md";
    crate::markdown::file_to_html(&page)
        .map(|contents| create_about_page(contents))
        .ok()
}

