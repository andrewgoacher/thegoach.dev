import React from "react"
import { Link, graphql } from "gatsby"

import {Seo} from "../components/"
import Layout from "../layouts/default-layout"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges


    return (
      <Layout location={this.props.location}>
        <Seo
          title="Latest Posts"
          keywords={[`blog`, `Andrew Goacher`, `programming`, `the goach`, "development"]}
        />

        <h1>Hi I'm Andrew!</h1>

        <div>
          <p>My site looks ugly because I was procrastinating a lot.</p>
            <p>I'll get some posts out and then revisit actually making it decent!
          </p>
        </div>

        <h3>Newest Posts</h3>

        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: "10px",
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
      </Layout>
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
                    }
                }
            }
        }
    }
`