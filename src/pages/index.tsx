import React from 'react';
import { Link, graphql } from 'gatsby';

const Index = () => {
  return (
    <Layout>
      <div className='row section topspace'>
        <div className='col-md-12'>
          <p className='lead text-center text-muted'>
            One day, there will be about 6 blog posts on here and I'll consider
            myself a successful <a href='/blog'>blogger</a>.<br />
            I'm a programmer, you can find out more about me{' '}
            <a href='/about'>here</a>.
          </p>
        </div>
      </div>
      <div className='row section featured topspace'>
        <h2 className='section-title'>
          <span>Recent Posts</span>
        </h2>
        <div className='row'>
          {/*{% for post in posts %}*/}
          {/*<div className="col-sm-6 col-md-3">*/}
          {/*    <h3 className="text-center">{{post.title}}</h3>*/}
          {/*    <p>Posted: ({{post.posted}})</p>*/}
          {/*    <p>{{post.description}}</p>*/}
          {/*    <p className="text-center"><a href="/blog/{{post.file}}" className="btn btn-action">Read more</a></p>*/}
          {/*</div>*/}
          {/*{% endfor %}*/}
        </div>
      </div>
    </Layout>
  );
};

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

// interface BlogProps {
//   data: any;
//   location: any;
// }
//
// interface BlogPost {
//   node: any;
// }
//
// const BlogIndex = ({ data, location }: BlogProps) => {
//   const siteTitle = data.site.siteMetadata.title;
//   const posts = data.allMarkdownRemark.edges;
//
//   return (
//     <Layout location={location} title={siteTitle}>
//       <SEO title='All posts' />
//       <Bio />
//       {posts.map(({ node }: BlogPost) => {
//         const title = node.frontmatter.title || node.fields.slug;
//         return (
//           <article key={node.fields.slug}>
//             <header>
//               <h3
//                 style={{
//                   marginBottom: rhythm(1 / 4),
//                 }}
//               >
//                 <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
//                   {title}
//                 </Link>
//               </h3>
//               <small>{node.frontmatter.date}</small>
//             </header>
//             <section>
//               <p
//                 dangerouslySetInnerHTML={{
//                   __html: node.frontmatter.description || node.excerpt,
//                 }}
//               />
//             </section>
//           </article>
//         );
//       })}
//     </Layout>
//   );
// };
//
// export default BlogIndex;
//
// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
//       edges {
//         node {
//           excerpt
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             title
//             description
//           }
//         }
//       }
//     }
//   }
// `;

export default Index;
