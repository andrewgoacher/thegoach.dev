import React from "react"

import { Link } from "gatsby"

class Menu extends React.Component {
  createLink(name, path, location) {
    let className = "";

    if(location.pathname.indexOf(path) === 0) {
      className = "selected";
    }

    return (
      <Link to={path} className={className}>
        {name}
      </Link>
    );
  }

  render() {
    const { location } = this.props
    return (
      <ul>
         <li>
          {this.createLink("Home", `/`, location)}
        </li>
        <li>
          {this.createLink("Blog", `/blog`, location)}
        </li>
      </ul>
    )
  }
}

export default Menu