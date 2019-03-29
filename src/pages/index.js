import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Image from "gatsby-image"

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { author } = data.site.siteMetadata
    const style = { borderRadius: "100%", float: "left", marginRight: "15px", verticalAlign: "center" }
    const imgStyle = { borderRadius: "50%" }


    return (
      <Layout location={this.props.location}>
        <SEO
          title="Latest Posts"
          keywords={[`blog`, `Andrew Goacher`, `programming`, `the goach`, "development"]}
        />

        <h1>Hi I'm Andrew!</h1>

        <div>
          <Image
            fixed={data.charlie.childImageSharp.fixed}
            alt={author}
            style={style}
            imgStyle={imgStyle}/>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div>
          <Image
            fixed={data.bigfoot.childImageSharp.fixed}
            alt={author}
            style={style}
            imgStyle={imgStyle}/>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div>
          <Image
            fixed={data.merlin.childImageSharp.fixed}
            alt={author}
            style={style}
            imgStyle={imgStyle}/>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make
            a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        site {
            siteMetadata {
                author
            }
        }
        charlie: file(absolutePath: {regex: "/charlie.jpg/"}) {
            childImageSharp {
                fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        merlin: file(absolutePath: {regex: "/merlin.jpg/"}) {
            childImageSharp {
                fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        bigfoot: file(absolutePath: {regex: "/bigfoot.jpg/"}) {
            childImageSharp {
                fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
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