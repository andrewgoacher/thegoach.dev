use rocket::response::content;
use serde::Serialize;
use rocket::{catch, catchers};
use rocket::Catcher;
use rocket_contrib::templates::Template;
use std::collections::hash_map::HashMap;


#[catch(404)]
fn not_found(_: &rocket::Request) -> Template {
    let context: HashMap<String,String> = HashMap::new();
    Template::render("404", &context)
}

#[catch(500)]
fn internal_server_error(_: &rocket::Request) -> Template {
    let context: HashMap<String,String> = HashMap::new();
    Template::render("500", &context)
}

pub fn catchers() -> Vec<Catcher> {
    catchers![not_found, internal_server_error]
}