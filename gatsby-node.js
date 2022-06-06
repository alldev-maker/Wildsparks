const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicProduct {
        nodes {
          uid
          id
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

  queryResults.data.allPrismicProduct.nodes.forEach(node => {
    createPage({
      path: `/product/${node.uid}`,
      component: path.resolve(`src/templates/product.js`),
      context: {
        id: node.id,
      },
    })
  })
  queryResults.data.allPrismiRecipe.nodes.forEach(node => {
    createPage({
      path: `/recipe/${node.uid}`,
      component: path.resolve(`src/templates/recipe.js`),
      context: {
        id: node.id,
      },
    })
  })
}
