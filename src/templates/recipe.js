import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import StarRatings from "react-star-ratings"
import Layout from "../components/layout"
import {
  ArrowLeft,
  ArrowRight,
  CookTime,
  PrepTime,
  Servings,
  TotalTime,
} from "../utils/imgImport"
import { social_links } from "../utils/staticData"
import Seo from "../components/seo"

function numFormat(n) {
  return n > 9 ? "" + n : "0" + n
}

const RecipeInfo = ({ info }) => (
  <div className="col-6 col-lg-3">
    <div className="info-item">
      <img src={info.icon} alt={info.label} />
      <div>
        <strong>{info.label}</strong>
        <p>{info.value}</p>
      </div>
    </div>
  </div>
)

const Recipe = ({ data, pageContext }) => {
  const { id } = pageContext
  const {
    title,
    description,
    header_image,
    total_time,
    prep_time,
    cook_time,
    servings,
    ingredients,
    instructions,
    tips,
    rating,
  } = data.prismicRecipe.data
  const recipes = data.allPrismicRecipe.nodes

  const curIndex = recipes.findIndex(item => item.id === id)

  const recipe_info = [
    {
      icon: TotalTime,
      label: "Total Time",
      value: `${total_time}Mins`,
    },
    {
      icon: PrepTime,
      label: "Prep Time",
      value: `${prep_time}Mins`,
    },
    {
      icon: CookTime,
      label: "Cook Time",
      value: `${cook_time}Mins`,
    },
    {
      icon: Servings,
      label: "Total Time",
      value: `${numFormat(servings)}`,
    },
  ]

  return (
    <Layout>
      <Seo title="Recipe Detail" />
      <section className="section recipe">
        <div className="recipe-detail">
          <h1 className="recipe-title">{title}</h1>
          <div className="position-relative">
            {curIndex !== 0 && (
              <Link
                to={`/recipe/${recipes[curIndex - 1]?.uid}`}
                className="btn-prev"
              >
                <img src={ArrowLeft} alt="left" />
              </Link>
            )}
            <GatsbyImage
              className="recipe-image"
              image={getImage(header_image)}
              alt={title}
            />
            {curIndex !== recipes.length - 1 && (
              <Link
                to={`/recipe/${recipes[curIndex + 1]?.uid}`}
                className="btn-next"
              >
                <img src={ArrowRight} alt="right" />
              </Link>
            )}
          </div>
          <div className="recipe-info row">
            {recipe_info.map((item, idx) => (
              <RecipeInfo info={item} key={idx} />
            ))}
          </div>
          <div className="row align-items-center">
            <div className="col-md-7 recipe-desc">
              <h4 className="text-uppercase">description</h4>
              <p>{description}</p>
            </div>
            <div className="col-md-5 recipe-star">
              <StarRatings
                rating={rating}
                starDimension="36px"
                starSpacing="2px"
                starRatedColor="#FFAC00"
              />
              <p className="rating">{rating} Rating</p>
            </div>
          </div>
          <div className="row recipe-guide">
            <div className="col-md-6">
              <h4 className="text-uppercase">ingredients</h4>
              <div
                className="ingredients"
                dangerouslySetInnerHTML={{ __html: ingredients.html }}
              />
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase">how to make it</h4>
              <div
                className="instructions"
                dangerouslySetInnerHTML={{ __html: instructions.html }}
              />
              <h4 className="mt-5 text-uppercase">tips</h4>
              <div
                className="tips"
                dangerouslySetInnerHTML={{ __html: tips.html }}
              />
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center">
            <h4 className="text-uppercase mb-0 me-3">share this recipe</h4>
            <div className="social-links">
              {social_links.map((item, idx) => (
                <a key={idx} href={item.to}>
                  <img src={item.icon} alt="social" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Recipe

export const query = graphql`
  query RecipeQuery($id: String) {
    prismicRecipe(id: { eq: $id }) {
      data {
        title
        header_image {
          gatsbyImageData
        }
        description
        cook_time
        prep_time
        rating
        servings
        total_time
        tips {
          html
        }
        ingredients {
          html
        }
        instructions {
          html
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
`
