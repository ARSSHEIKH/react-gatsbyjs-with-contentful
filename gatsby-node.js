const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  forProducts();
  forProjects();
  async function forProducts() {
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
  `);
    result.data.allContentfulProducts.nodes.forEach(products => {
      createPage({
        path: `/products/${products.slug}`,
        component: path.resolve('./src/templates/productTemplates.js'),
        context: {
          products: products
        }
      });
    });
  }
  async function forProjects() {
    const result = await graphql(`
    {
      allContentfulProjects {
        nodes {
          siteUrl
          slug
          title
          images {
            fluid {
              src
            }
          }
        }
      }
    }
  `);

    result.data.allContentfulProjects.nodes.forEach(projects => {
      createPage({
        path: `/projects/${projects.slug}`,
        component: path.resolve('./src/templates/projectTemplates.js'),
        context: {
          projects: projects
        }
      });
    });
  }
}
