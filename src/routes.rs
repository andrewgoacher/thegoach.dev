use rocket_contrib::templates::Template;
use crate::blogpost::BlogPostSmall;
use std::vec::Vec;
use time::Date;

#[derive(Serialize)]
struct IndexTemplate {
    name: String
}

#[derive(Serialize)]
struct BlogPostMeta {
    image: String,
    title: String,
    published: Date,
    desc: String,
    link: String
}

impl BlogPostMeta {
    pub fn from_small(post:BlogPostSmall) -> Self {
        BlogPostMeta {
            image: format!("assets/images/blog/{}", post.image),
            title: post.title,
            published: post.published,
            desc: post.description,
            link: format!("/blog/posts/{}", post.id)
        }
    }
}

#[derive(Serialize)]
struct BlogListTemplate {
    name: String,
    posts: Vec<BlogPostMeta>
}

#[derive(Serialize)]
struct AboutPageTemplate {
    name: String
}

#[get("/")]
pub fn index() -> Template {
    let context = IndexTemplate {name: String::from("Home")};
    Template::render("index", &context)
}

#[get("/blog")]
pub fn blog() -> Template {
    let context = BlogListTemplate {
        name: String::from("Latest Posts"),
        posts: BlogPostSmall::get_top().into_iter().map(|post| {BlogPostMeta::from_small(post)}).collect()
    };
    Template::render("blog", &context)
}

#[get("/about")]
pub fn about() -> Template {
    let context = AboutPageTemplate { name: String::from("About")};
    Template::render("about", &context)
}