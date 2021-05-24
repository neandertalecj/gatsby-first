const path = require('path') //from node.js

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark {
        nodes {
          frontmatter {
            category
            url
          }
        }
      }
    }
  `)
  // console.log('data >>>>', data)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { url, category } = node.frontmatter
    actions.createPage({
      path: `/${category}/${url}`,
      component: path.resolve('./src/templates/single-post.js'),
      context: { url } //context obj is pushed into a template file
    })
  })
}