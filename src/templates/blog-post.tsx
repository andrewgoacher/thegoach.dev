import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';

interface BlogPostTemplateProps {
  data: any;
  pageContext: any;
}

const BlogPostTemplate = ({ data, pageContext }: BlogPostTemplateProps) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        // description={post.frontmatter.description || post.excerpt}
      />
      <article className='row topspace'>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <div
          className='col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 maincontent'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </article>

      {/*<nav>*/}
      {/*  <ul*/}
      {/*    style={{*/}
      {/*      display: `flex`,*/}
      {/*      flexWrap: `wrap`,*/}
      {/*      justifyContent: `space-between`,*/}
      {/*      listStyle: `none`,*/}
      {/*      padding: 0,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <li>*/}
      {/*      {previous && (*/}
      {/*        <Link to={previous.fields.slug} rel='prev'>*/}
      {/*          ← {previous.frontmatter.title}*/}
      {/*        </Link>*/}
      {/*      )}*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      {next && (*/}
      {/*        <Link to={next.fields.slug} rel='next'>*/}
      {/*          {next.frontmatter.title} →*/}
      {/*        </Link>*/}
      {/*      )}*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</nav>*/}
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;

interface Frontmatter {
  title: string;
  date: string;
  description: string;
}

interface Post {
  id: string;
  excerpt: string;
  html: string;
  frontmatter: Frontmatter;
}

interface SiteMetadata {
  title: string;
}

interface Site {
  siteMetadata: SiteMetadata;
}

interface Query {
  site: Site;
  markdownRemark: Post;
}
