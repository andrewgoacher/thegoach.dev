use rocket_contrib::templates::Template;
use serde::{Serialize, Deserialize};
use rocket::get;
use std::fs::File;
use std::io::BufReader;

#[derive(Serialize, Deserialize)]
pub struct CVItem {
    name: String,
    title: String,
    time: String,
    description: String,
    technologies: Vec<String>
}

#[derive(Serialize, Deserialize)]
pub struct CvPageContext {
    items: Vec<CVItem>
}

fn get_cv_items(file: File) -> Option<CvPageContext> {
    let reader = BufReader::new(file);
    serde_json::from_reader(reader).ok()
}

fn create_cv_page(items: CvPageContext) -> Template {
    Template::render("cv", &items)
}

#[get("/cv")]
pub fn cv() -> Option<Template> {
    File::open("data/cv.json")
        .ok()
        .and_then(|file| get_cv_items(file))
        .map(|items| create_cv_page(items))
}

