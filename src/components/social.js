import React from "react"
import { StaticQuery } from "gatsby"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const socialQuery = graphql`
    query {
        site {
            siteMetadata {
                social {
                    twitter,
                    linkedin
                },
                repos {
                    github,
                    gitlab,
                    bitbucket
                }
            }
        }
    }
`

const Social = () => {
  const data = useStaticQuery(socialQuery)
  const { social, repos } = data.site.siteMetadata
  return (
    <div className="social">
      <a href={`https://github.com/${repos.github}`} target="_blank">
        <i className="fa-c fab fa-github fa-3x"></i>
      </a>
      <a href={`https://gitlab.com/${repos.gitlab}`} target="_blank">
        <i className="fab fa-gitlab fa-c fa-3x"></i>
      </a>
      <a href={`https://bitbucket.org/${repos.bitbucket}`} target="_blank">
        <i className="fab fa-bitbucket fa-c fa-3x"></i>
      </a>
      <a href={`https://twitter.com/${social.twitter}`} target="_blank">
        <i className="fab fa-twitter fa-c fa-3x"></i>
      </a>
      <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank">
        <i className="fab fa-linkedin fa-c fa-3x"></i>
      </a>
    </div>
  )
}

export default Social