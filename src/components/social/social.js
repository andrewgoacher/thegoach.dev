import React from "react"
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

const MakeLink = (url, className) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <i className={`fab fa-3x ${className}`}/>
    </a>
  )
}

const Social = () => {
  const data = useStaticQuery(socialQuery)
  const { social, repos } = data.site.siteMetadata
  return (
    <div className="social">
      {MakeLink(`https://github.com/${repos.github}`, "fa-github")}
      {MakeLink(`https://gitlab.com/${repos.gitlab}`, "fa-gitlab")}
      {MakeLink(`https://bitbucket.org/${repos.bitbucket}`, "fa-bitbucket")}
      {MakeLink(`https://twitter.com/${social.twitter}`, "fa-twitter")}
      {MakeLink(`https://linkedin.com/in/${social.linkedin}`, "fa-linkedin")}
    </div>
  )
}

export default Social