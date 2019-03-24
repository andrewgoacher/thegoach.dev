import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import PageLayout from '../components/layouts/pageLayout';

// import { rhythm } from "../utils/typography"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <PageLayout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `Andrew Goacher`, `programming`, `the goach`, 'development']}
        />
        <h1>Index page!</h1>

        <p>
          Some content should be here
        </p>
      </PageLayout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
/*
#    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
#      edges {
#        node {
#          excerpt
#          fields {
#            slug
#          }
#          frontmatter {
#            date(formatString: "MMMM DD, YYYY")
#            title
#            description
#          }
#        }
#      }
#    }
 */