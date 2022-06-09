import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import RecipeItem from "../common/recipe-item"

const HomeRecipes = () => {
  const recipeData = useStaticQuery(graphql`
    query RecipeSomeQuery {
      allPrismicRecipe {
        nodes {
          uid
          data {
            cuisine
            title
            prep_time
            servings
            header_image {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)
  const recipes = recipeData.allPrismicRecipe.nodes.slice(0, 3)

  return (
    <section className="section recipes-section">
      <h1 className="text-white text-uppercase">Recipes</h1>
      <div className="row">
        {recipes.map((item, idx) => (
          <div className="col-sm-4" key={idx}>
            <RecipeItem recipe={item} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeRecipes
