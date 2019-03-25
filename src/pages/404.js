import React from "react"

import PageLayout from '../components/layouts/pageLayout';
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    return (
      <PageLayout location={this.props.location}>
        <SEO title="404: Not Found" />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </PageLayout>
    )
  }
}

export default NotFoundPage