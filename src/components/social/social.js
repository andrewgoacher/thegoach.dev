import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import './social.scss'

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

const MakeLink = (url, title) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {title}
    </a>
  )
}

const Social = () => {
  const data = useStaticQuery(socialQuery)
  const { social, repos } = data.site.siteMetadata
  return (
    <div className="social">
      {MakeLink(`https://github.com/${repos.github}`, "Github")} /
      {MakeLink(`https://gitlab.com/${repos.gitlab}`, "Gitlab")} /
      {MakeLink(`https://bitbucket.org/${repos.bitbucket}`, "Bitbucket")} /
      {MakeLink(`https://twitter.com/${social.twitter}`, "Twitter")} /
      {MakeLink(`https://linkedin.com/in/${social.linkedin}`, "Linkedin")}
    </div>
  )
}

export default Social