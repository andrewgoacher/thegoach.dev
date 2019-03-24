import React from 'react';
import './pageLayout.css';
import {Link} from 'gatsby';
import Menu from '../menu';
import Avatar from '../avatar';

class PageLayout extends React.Component {
  render() {
    const {title, children} = this.props;

    return (
      <div className="grid">
        <header>
          <h1>
            <Avatar />
            <Link to={`/`}>
              {title}
            </Link>
          </h1>
        </header>
        <nav>
          <Menu />
        </nav>
        <main>
          {children}
        </main>
        <footer>
            © Andrew Goacher {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    );
  }
}

export default PageLayout;