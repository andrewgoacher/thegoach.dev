import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"

import {Menu} from "../components/"

const DefaultLayout = ({ children, location }) => {
  return (
    <StaticQuery query={layoutQuery} render={data => {
      const {tagline} = data.site.siteMetadata

      return (
        <div>
          <header>
            <Menu location={location}/>
          </header>
          <main>
            {children}
          </main>
          <footer>
            © Andrew Goacher {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      )
    }}
    />
  )
}

export default DefaultLayout

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