const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
  {
    allContentfulProducts {
      nodes {
        slug
      }
    }
  }
`)
  result.data.allContentfulProducts.nodes.forEach(products => {
      path: `/products/${products.slug}`
      component: path.resolve('./src/templates/productTemplates.js')
      context: {
        slug: products.slug
      }
  });
  console.log('Result ........ , ',JSON.stringify(result));
}