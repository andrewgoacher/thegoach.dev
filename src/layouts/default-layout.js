import React from "react"
import { graphql, StaticQuery } from "gatsby"

import './normalize.scss'
import './typebase.scss'
import './layout.scss'

import {Menu, Social} from "../components/"

const DefaultLayout = ({ children, location }) => {
  return (
    <StaticQuery query={layoutQuery} render={data => {
      const {tagline} = data.site.siteMetadata

      return (
        <div>
          <header>
            <h3><a href="/">Andrew Goacher</a></h3>
            <Menu location={location}/>
          </header>
          <main>
            {children}
          </main>
          <footer>
            <span>© Andrew Goacher {new Date().getFullYear()}, Built with
            &nbsp;<a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
            <Social />
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