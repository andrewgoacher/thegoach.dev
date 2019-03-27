import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import PageLayout from '../components/layouts/pageLayout';

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <PageLayout location={this.props.location}>
        <SEO
          title="Latest Posts"
          keywords={[`blog`, `Andrew Goacher`, `programming`, `the goach`, 'development']}
        />
        <h1>Newest Posts</h1>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: '10px',
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </div>
          )
        })}
      </PageLayout>
    )
  }
}

export default Index

export const pageQuery = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
             limit: 5) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
#                        description
                    }
                }
            }
        }
    }
`