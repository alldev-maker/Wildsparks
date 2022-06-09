import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import RecipeItem from "../components/common/recipe-item"
import Layout from "../components/layout"
import Seo from "../components/seo"

const filters = ["All Recipes", "Continental", "Caribbean", "African"]

const Recipes = ({ data }) => {
  const postsPerPage = 6
  let arrayForHoldingPosts = []
  const allRecipes = data.allPrismicRecipe.nodes

  const [filter, setFilter] = useState("All Recipes")
  const [postsToShow, setPostsToShow] = useState([])
  const [next, setNext] = useState(3)

  const loopWithSlice = end => {
    const slicedPosts =
      filter === "All Recipes"
        ? allRecipes.slice(0, end)
        : allRecipes.filter(item => item.data.cuisine === filter).slice(0, end)
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts]
    setPostsToShow(arrayForHoldingPosts)
  }

  const handleShowMorePosts = () => {
    loopWithSlice(next + postsPerPage)
    setNext(next + postsPerPage)
  }

  useEffect(() => {
    loopWithSlice(postsPerPage)
  }, [filter])

  return (
    <Layout>
      <Seo title="Recipes" />
      <div className="d-md-none mt-3">
        <h1 className="text-black text-uppercase">Recipes</h1>
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
      </div>
      <section className="section recipes-section">
        <div className="d-none d-md-block">
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
        </div>

        <div className="row">
          {postsToShow.map((item, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <RecipeItem recipe={item} />
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

export const query = graphql`
  query Recipes {
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
`
