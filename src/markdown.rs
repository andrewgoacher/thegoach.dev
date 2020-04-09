extern crate comrak;

use comrak::{markdown_to_html, ComrakOptions};
use std::path::Path;
use std::error::Error;
use std::io::{prelude::*, BufReader};
use std::io::Result;
use std::fs::File;

pub fn to_html(input: &str) -> String {
    markdown_to_html(input, &ComrakOptions::default())
}

pub fn file_to_html(file: &str) -> Result<String> {
    let path = Path::new(file);
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(to_html(&contents))
}