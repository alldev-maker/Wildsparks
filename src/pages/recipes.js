import React, { useState, useEffect } from "react"
import RecipeItem from "../components/common/recipe-item"
import Layout from "../components/layout"
import { recipes } from "../utils/staticData"

const filters = ["All Recipes", "Continental", "Caribbean", "African"]

const Recipes = () => {
  const postsPerPage = 9
  let arrayForHoldingPosts = []

  const [filter, setFilter] = useState("All Products")

  const [postsToShow, setPostsToShow] = useState([])
  const [next, setNext] = useState(3)

  const loopWithSlice = end => {
    const slicedPosts = recipes.slice(0, end)
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts]
    setPostsToShow(arrayForHoldingPosts)
  }

  useEffect(() => {
    loopWithSlice(postsPerPage)
  }, [])

  const handleShowMorePosts = () => {
    loopWithSlice(next + postsPerPage)
    setNext(next + postsPerPage)
  }

  console.log(postsToShow)
  return (
    <Layout>
      <section className="section recipes-section">
        <h1 className="text-white text-uppercase">Recipes</h1>
        <div className="filter-box">
          <p className="filter-label">Filter</p>
          <div className="filter-list">
            {filters.map((item, idx) => (
              <button
                key={idx}
                className={`filter-item ${item === filter ? "active" : ""}`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="row">
          {postsToShow.map((item, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <RecipeItem data={item} />
            </div>
          ))}
        </div>
        <div className="my-5 text-center">
          <button className="btn btn-load-more" onClick={handleShowMorePosts}>
            Load More Recipes
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default Recipes
