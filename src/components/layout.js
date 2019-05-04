import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import Menu from "./menu"
import Social from "./social"

const Layout = ({ children, location }) => {
  return (
    <StaticQuery query={layoutQuery} render={data => {
      const {tagline} = data.site.siteMetadata

      return (
        <div>
          <header>
            <Link to={`/`}>
              {tagline}
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
          <Social />
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
                tagline,
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