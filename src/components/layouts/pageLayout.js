import React from "react"
import "./pageLayout.css"
import { Link } from "gatsby"
import Menu from "../menu"
import Avatar from "../avatar"

class PageLayout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className="layout">
        <div className="upper"></div>
        <header>
          <h1>
            <Link to={`/`}>
              {title}
            </Link>
          </h1>
        </header>
        <nav>
          <Menu/>
        </nav>
        <main>
          {children}
        </main>
        <div className="lower"></div>
        <footer>
          © Andrew Goacher {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        <div className="social">
          <i className="fa-c fab fa-github fa-3x"></i>
          <i className="fab fa-gitlab fa-c fa-3x"></i>
          <i className="fab fa-bitbucket fa-c fa-3x"></i>
          <i className="fab fa-twitter fa-c fa-3x"></i>
          <i className="fab fa-linkedin fa-c fa-3x"></i>
        </div>
      </div>
    )
  }
}

export default PageLayout
