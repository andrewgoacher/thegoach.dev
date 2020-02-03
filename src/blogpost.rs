use time::Date;

#[derive(Serialize)]
pub struct BlogPostSmall {
    pub image: String,
    pub title: String,
    pub published: Date,
    pub description: String,
    pub id: i64
}

use std::vec::Vec;

impl BlogPostSmall {
    pub fn new(title:&str, description:&str, image:&str,published:Date, id: i64) -> Self {
        BlogPostSmall {
            image: String::from(image),
            title: String::from(title),
            published,
            description: String::from(description),
            id
        }
    }

    pub fn get_top() -> Vec<BlogPostSmall> {
        let desc = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec quam felis, ultricies...";
        vec![
            BlogPostSmall::new("Why every developer should have a blog!", desc, "blog-post-thumb-1.jpg", Date::today(), 1),
            BlogPostSmall::new("Why every developer should have a BBQ!", desc,"blog-post-thumb-2.jpg", date!(2020-01-20), 2),
            BlogPostSmall::new("Why every developer should have a Laptop!", desc, "blog-post-thumb-3.jpg",date!(2020-01-10), 3),
            BlogPostSmall::new("Why every developer should have a Cat!", desc,"blog-post-thumb-4.jpg", date!(2020-01-01), 4),
            BlogPostSmall::new("Why every developer should have a Colonoscopy!", desc, "blog-post-thumb-5.jpg",date!(2019-12-30), 5),
            BlogPostSmall::new("Why every developer should have a Suitcase!", desc,"blog-post-thumb-6.jpg", date!(2019-12-10), 6),
            BlogPostSmall::new("Why every developer should have a Brain!", desc, "blog-post-thumb-7.jpg",date!(2019-12-01), 7),
            BlogPostSmall::new("Why every developer should have a Kidney!", desc, "blog-post-thumb-8.jpg",date!(2019-11-20), 8),
            BlogPostSmall::new("Why every developer should have an opinion!!", desc, "blog-post-thumb-9.jpg",date!(2019-10-10), 9),
        ]
    }
}