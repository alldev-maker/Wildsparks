import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const RecipeItem = ({ recipe }) => (
  <article className="recipe-item">
    <GatsbyImage
      class="recipe-item__img"
      image={getImage(recipe?.data.header_image)}
      alt={recipe?.data.title}
    />
    <div className="recipe-item__body">
      <h4 className="recipe-title">{recipe?.data.title}</h4>
      <div className="recipe-info">
        <div className="col-6">
          <p className="recipe-label">Prep Time:</p>
          <p>{recipe?.data.prep_time}</p>
        </div>
        <div className="col-6">
          <p className="recipe-label">Servings:</p>
          <p>{recipe?.data.servings}</p>
        </div>
      </div>
      <Link to={`/recipe/${recipe?.uid}`} className="btn btn-red">
        View Recipe
      </Link>
    </div>
  </article>
)

export default RecipeItem
