import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blog = () => {
  return (
    <Layout>
      <SEO title={'Blog'} />
      <div className='row topspace'>
        <div className='col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2 maincontent'>
          {/*{% for post in posts %}*/}
          {/*<article className="post">*/}
          {/*  <header className="entry-header">*/}
          {/*    <div className="entry-meta">*/}
          {/*      <span className="posted-on"><time className="entry-date published"*/}
          {/*                                        date="{{post.posted}}">Posted: ({{post.posted}})</time></span>*/}
          {/*    </div>*/}
          {/*    <h1 className="entry-title"><a href="/blog/{{post.file}}" rel="bookmark">{{post.title}}</a></h1>*/}
          {/*  </header>*/}
          {/*  <div className="entry-content">*/}
          {/*    <p>{{post.description}}</p>*/}
          {/*  </div>*/}
          {/*</article>*/}
          {/*{% endfor %}*/}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
