const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    if (!result.data || !result.data.allMarkdownRemark) {
      return null
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })

    return null
  })
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
]


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const { title, date } = node.frontmatter
    const d = new Date(date)
    const t = title.replace(" ", "-")
    const value = `/${d.getFullYear()}/${monthNames[d.getMonth()]}/${t}`

    createNodeField({
      node,
      name: `slug`,
      value: `/posts/${value}`,
    })
  }
}
