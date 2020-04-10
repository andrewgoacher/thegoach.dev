#![feature(proc_macro_hygiene, decl_macro)]

use std::vec::Vec;

use rocket::{routes, Rocket};
use rocket_contrib::templates::Template;
use rocket_contrib::serve::StaticFiles;

mod blog;
mod cache;
mod formatters;
mod web;
mod markdown;

use crate::blog::AllBlogPostListings;

use crate::web::{PostCache, PageCache};


fn rocket() -> Rocket {
    rocket::ignite()
        .attach(Template::fairing())
        .manage(AllBlogPostListings::new())
        .manage(PostCache::new())
        .manage(PageCache::new())
        .mount("/", StaticFiles::from("public"))
        .mount("/", routes![web::index::index, web::blog::post, web::about::about,
            web::blog::blog, web::get_page, web::cv::cv])
        .register(web::error::catchers())
}

fn main() {
    rocket().launch();
}
