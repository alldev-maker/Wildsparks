const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicProduct {
        nodes {
          uid
          id
          data {
            headline_stats {
              statistic
              icon {
                gatsbyImageData
              }
            }
            type
            rating
            product_name
            product_image {
              gatsbyImageData
            }
          }
        }
      }
      allPrismicRecipe {
        nodes {
          uid
          id
        }
      }
    }
  `)

  queryResults.data.allPrismicProduct?.nodes.forEach(node => {
    createPage({
      path: `/product/${node.uid}`,
      component: path.resolve(`src/templates/product.js`),
      context: {
        id: node.id,
        related_products: queryResults.data.allPrismicProduct?.nodes
          .filter(item => item.data.type === node.data.type)
          .slice(0, 3),
      },
    })
  })

  queryResults.data.allPrismicRecipe?.nodes.forEach(node => {
    createPage({
      path: `/recipe/${node.uid}`,
      component: path.resolve(`src/templates/recipe.js`),
      context: {
        id: node.id,
      },
    })
  })
}
