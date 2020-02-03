#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;
extern crate serde_json;
#[macro_use] extern crate time;

mod routes;
mod blogpost;

use rocket::Rocket;
use rocket_contrib::serve::StaticFiles;
use rocket_contrib::templates::Template;


fn rocket() -> Rocket {
    rocket::ignite()
        .attach(Template::fairing())
        .mount("/", StaticFiles::from("static"))
        .mount("/", routes![routes::index]) //, routes::blog, routes::about])
}

fn main() {
    rocket().launch();
}
