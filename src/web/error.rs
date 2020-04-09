use rocket::response::content;
use rocket_contrib::templates::Template;
use std::error::Error;
use serde::Serialize;
use rocket::{catch, catchers};
use rocket::Catcher;

#[derive(Serialize)]
struct ErrorContext {
    error: String
}

#[catch(404)]
fn not_found(req: &rocket::Request) -> content::Html<String> {
    content::Html(format!("<p>Sorry, but '{}' is not a valid path!</p>",
                          req.uri()))
}

#[catch(500)]
fn internal_server_error(_: &rocket::Request) -> content::Html<String> {
    content::Html(String::from("<p>An error occurred</p>"))
}

pub fn catchers() -> Vec<Catcher> {
    catchers![not_found, internal_server_error]
}