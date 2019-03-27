import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from 'gatsby-image';

import SEO from "../components/seo"
import PageLayout from "../components/layouts/pageLayout"

const About = ({ location }) => {
  return (
    <StaticQuery query={imageQueries} render={data => {
      const author = data.site.siteMetadata
      return (
        <PageLayout location={location}>
          <SEO
            title="About me"
          />
          <h1>Hi I'm Andrew!</h1>

          <p>
            I'm a 'full stack' developer working in Manchester UK. I mostly work with C# and .NET backends and react or
            angular front ends.</p>
          <p>
            I'm easy on technology choice.
            In my own time I'm looking at rust and F# and tinkering with side projects whenever the mood strikes.
          </p>

          <p>
            I don't get a lot done because of these 3 idiots.
          </p>
            <Image
              fixed={data.charlie.childImageSharp.fixed}
              alt={author}
              style={{ borderRadius: "100%" }}
              imgStyle={{ borderRadius: "50%" }}/>

            <Image
              fixed={data.bigfoot.childImageSharp.fixed}
              alt={author}
              style={{ borderRadius: "100%" }}
              imgStyle={{ borderRadius: "50%" }}/>


            <Image
              fixed={data.merlin.childImageSharp.fixed}
              alt={author}
              style={{ borderRadius: "100%" }}
              imgStyle={{ borderRadius: "50%" }}/>

        </PageLayout>
      )
    }}/>
  )
}

export default About
const imageQueries = graphql`
    query ImageQueries {
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
    }
`