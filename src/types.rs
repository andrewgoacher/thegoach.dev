use std::error::Error;

pub type BlogResult<T> = Result<T, Box<dyn Error>>;