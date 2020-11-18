const path = require('path')
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
  {
    allContentfulProducts {
      nodes {
        title
        price
        slug
        images {
          fluid {
            src
          }
        }
        info {
          info
        }
      }
    }
  }
`)
  result.data.allContentfulProducts.nodes.forEach(products => {
    createPage({
      path: `/products/${products.slug}`,
      component: path.resolve('./src/templates/productTemplates.js'),
      context: {
        products: products
      }
    })
  });
  console.log('Result ........ , ', JSON.stringify(result));
}