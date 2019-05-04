const {onCreateBlogNode, onCreateBlogPage} = require('./build-helpers/blog-page');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  onCreateBlogPage(graphql, createPage)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    onCreateBlogNode(node, createNodeField)
  }
}
