import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Menu from "./menu"

import "../styles/styles.scss"

const Layout = ({ children, location }) => {
  return (
    <StaticQuery query={layoutQuery} render={data => {
      const social = data.site.siteMetadata.social
      const repos = data.site.siteMetadata.repos
      const title = data.site.siteMetadata.title

      return (
        <div>
          <header>
            <Link to={`/`}>
              {title}
            </Link>
          </header>
          <nav>
            <Menu location={location}/>
          </nav>
          <main>
            {children}
          </main>
          <footer>
            © Andrew Goacher {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
          <div>
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
        </div>
      )
    }}
    />
  )
}

export default Layout

export const layoutQuery = graphql`
    query {
        site {
            siteMetadata {
                title,
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