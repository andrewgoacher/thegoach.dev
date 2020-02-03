#[derive(Default)]
struct Cache {}

use rocket::{Request, Data, Response};
use rocket::fairing::{Fairing, Info, Kind};
use rocket::http::{Method, ContentType, Status};

impl Fairing for Cache {
    fn on_response(&self, request: &Request, response: &mut Response) {
        if response.status() == Status::NotFound {
            return;
        }

        response.set_header("Cache-Control", "public, max-age=30");
    }
}