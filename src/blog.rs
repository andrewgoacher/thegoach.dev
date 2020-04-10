use std::fs::File;
use std::io::BufReader;
use serde::{Serialize, Deserialize};
use crate::cache::Cache;
use chrono::NaiveDate;
use crate::formatters::date;
use std::io::Result;

#[derive(Serialize, Deserialize, Clone)]
pub struct BlogListing {
    title: String,
    file: String,
    description: String,
    #[serde(with = "date")]
    posted: NaiveDate,
}

pub type AllBlogPostListings = Cache<Vec<BlogListing>>;

#[derive(Serialize, Clone)]
pub struct BlogPost {
    contents: String
}

impl AllBlogPostListings {
    fn all_posts(file: &str) -> Result<Vec<BlogListing>> {
        let file = File::open(file)?;
        let reader = BufReader::new(file);
        let posts = serde_json::from_reader(reader)?;
        Ok(posts)
    }

    fn set(&self, file:&str) -> Option<Vec<BlogListing>> {
        match Self::all_posts(file) {
            Err(e) => {
                println!("Error loading all blog posts.\n{:?}", e);
                None
            },
            Ok(posts) => {
                self.set_cache(posts.clone());
                Some(posts)
            }
        }
    }

    pub fn cache_or_load(&self, file: &str) -> Option<Vec<BlogListing>> {
        match self.get_cache() {
            Some(cache) => Some(cache),
            None => self.set(file)
        }
    }
}

impl BlogPost {
    pub fn new(str: String) -> Self {
        BlogPost {
            contents: str
        }
    }

    pub fn from_file(file: &str) -> Result<Self> {
        crate::markdown::file_to_html(file).map(|html| BlogPost::new(html))
    }
}