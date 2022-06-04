import React from "react"
import { Link } from "gatsby"

const RecipeItem = ({ data }) => (
  <article className="recipe-item">
    <img src={data.img} alt="prod item" />
    <div className="recipe-item__body">
      <h4 className="recipe-title">{data.title}</h4>
      <div className="recipe-info">
        <div className="col-6">
          <p className="recipe-label">Prep Time:</p>
          <p>{data.prep_time}</p>
        </div>
        <div className="col-6">
          <p className="recipe-label">Servings:</p>
          <p>{data.servings}</p>
        </div>
      </div>
      <Link to={data.uid} className="btn btn-red">
        View Recipe
      </Link>
    </div>
  </article>
)

export default RecipeItem
