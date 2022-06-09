import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ProductItem from "../components/common/product-item"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Accordion from "../components/common/accordion"
import Seo from "../components/seo"

const HeadlineStat = ({ headline }) => (
  <div className="headline-stat">
    <GatsbyImage
      className="headline-icon"
      image={getImage(headline.icon)}
      alt={headline.statistic}
    />
    <p className="headline-text">{headline.statistic}</p>
  </div>
)

const Product = ({ data, pageContext }) => {
  const { related_products } = pageContext
  const {
    description,
    headline_stats,
    ingredients,
    nutritional_facts,
    product_image,
    product_name,
  } = data.prismicProduct.data

  const accordions = [
    {
      question: "Description",
      answer: description.html,
    },
    {
      question: "Nutritional Facts",
      answer: nutritional_facts.html,
    },
    {
      question: "Ingredients",
      answer: ingredients.html,
    },
  ]

  return (
    <Layout>
      <Seo title="Product Detail" />
      <section className="product-detail">
        <h1 className="product-name">{product_name}</h1>
        <div className="headline d-none d-md-flex">
          {headline_stats.map((item, idx) => (
            <HeadlineStat headline={item} key={idx} />
          ))}
        </div>
        <div className="row align-items-center">
          <div className="col-md-6">
            <GatsbyImage
              className="product-image"
              image={getImage(product_image)}
              alt={product_name}
            />
          </div>
          <div className="col-md-6 d-md-none">
            <div className="headline">
              {headline_stats.map((item, idx) => (
                <HeadlineStat headline={item} key={idx} />
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-info">
              {accordions.map((item, idx) => (
                <Accordion {...item} key={idx} />
              ))}
              <Link to="/where-to-buy" className="btn btn-red">
                Where to buy
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section products-section detail">
        <h2 className="product-type text-uppercase">Related Products</h2>
        <div className="row">
          {related_products.map((item, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <ProductItem product={item} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Product

export const query = graphql`
  query ProductQuery($id: String) {
    prismicProduct(id: { eq: $id }) {
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
        description {
          html
        }
        ingredients {
          html
        }
        nutritional_facts {
          html
        }
      }
    }
    allPrismicProduct {
      nodes {
        uid
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
  }
`
