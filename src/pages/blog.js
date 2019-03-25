import React from "react"
import { Link, graphql } from "gatsby"

import PageLayout from "../components/layouts/pageLayout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  // getPosts(posts) {
  //   if(!posts) {
  //     return null;
  //   }
  //   return posts.map(({ node}) => {
  //     const title = node.frontmatter.title || node.fields.slug;
  //     return (
  //       <div key={node.fields.slug}>
  //         <h3
  //           style={{
  //             marginBottom: rhythm(1/4)
  //           }}>
  //          <link style={{boxShadow: 'none'}} to={node.fields.slug}>
  //            {title}</link>
  //         </h3>
  //         <small>{node.frontmatter.date}</small>
  //         <p dangerouslySetInnerHTML={{__html: node.frontmatter.description || node.excerpt}} />
  //       </div>
  //     );
  //   });
  // }
  render() {
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // let posts =  null;
    // if(data.allMarkdownRemark && data.allMarkdownRemark.edges) {
    //   posts = this.getPosts(data.allMarkdownRemark.edges);
    // }

    return (
      <PageLayout location={this.props.location}>
        <SEO title="Blog Posts" />
        <p>
          There are currently no posts to see here!
        </p>
      </PageLayout>
    )
  }
}

export default BlogIndex
//
// export const pageQuery = graphql`
//   query {
//       site {
//           siteMetadata {
//               title
//           }
//       }
//   }`
//    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
// `
