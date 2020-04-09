use std::fs::File;
use std::io::BufReader;
use serde::{Serialize, Deserialize};
use std::path::Path;
use crate::cache::Cache;
use chrono::NaiveDate;
use crate::formatters::date;
use crate::types::BlogResult;

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
    fn all_posts(file: &str) -> BlogResult<Vec<BlogListing>> {
        let file = File::open(file)?;
        let reader = BufReader::new(file);
        let posts = serde_json::from_reader(reader)?;
        Ok(posts)
    }

    pub fn cache_or_load(&self, file: &str) -> BlogResult<Vec<BlogListing>> {
        match self.get_cache() {
            Some(cache) => Ok(cache),
            None => {
                match Self::all_posts(file) {
                    Err(e) => Err(e),
                    Ok(posts) => {
                        self.set_cache(posts.clone());
                        Ok(posts)
                    }
                }
            }
        }
    }
}

impl BlogPost {
    pub fn new(str: String) -> Self {
        BlogPost {
            contents: str
        }
    }

    pub fn from_file(file: &str) -> BlogResult<Self> {
        match crate::markdown::file_to_html(file    ) {
            Err(e) => Err(Box::new(e)),
            Ok(s) => Ok(Self::new(s))
        }
    }
}