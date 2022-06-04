import React from "react"
import { recipes } from "../../utils/staticData"
import RecipeItem from "../common/recipe-item"

const HomeRecipes = () => (
  <section className="section recipes-section">
    <h1 className="text-white text-uppercase">Recipes</h1>
    <div className="row">
      {recipes.slice(0, 3).map((item, idx) => (
        <div className="col-sm-4" key={idx}>
          <RecipeItem data={item} />
        </div>
      ))}
    </div>
  </section>
)

export default HomeRecipes
