import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = ({ data }: any) => {
  const nodes: Post[] = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title={'Blog'} />
      <div className='row topspace'>
        <div className='col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 maincontent'>
          {nodes.map((n: Post, i: number) => {
            return <BlogPost key={i} post={n.node} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

interface BlogPostProp {
  post: Node;
}

const BlogPost = ({ post }: BlogPostProp) => {
  return (
    <article className='post'>
      <header className='entry-header'>
        <div className='entry-meta'>
          <span className='posted-on'>
            <time
              className='entry-date published'
              dateTime={post.frontmatter.date}
            >
              Posted: ({post.frontmatter.date})
            </time>
          </span>
        </div>
        <h1 className='entry-title'>
          <a href={`/blog/${post.fields.slug}`} rel='bookmark'>
            {post.frontmatter.title}
          </a>
        </h1>
      </header>
      <div className='entry-content'>
        <p>{post.frontmatter.description}</p>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
};

interface Fields {
  slug: string;
}

interface Frontmatter {
  date: string;
  title: string;
  description: string;
}

interface Node {
  excerpt: string;
  fields: Fields;
  frontmatter: Frontmatter;
}

interface Post {
  node: Node;
}

interface Posts {
  edges: Post[];
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 6
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
