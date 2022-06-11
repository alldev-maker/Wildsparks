import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HomeProducts = () => {
  const productCategories = useStaticQuery(graphql`
    query categoriesQuery {
      allPrismicCategories {
        nodes {
          data {
            categories {
              category_name
              category_image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  const categories =
    productCategories.allPrismicCategories.nodes[0].data.categories

  return (
    <section className="section home-products">
      <h1 className="text-white text-uppercase">Products</h1>
      <div className="row">
        {categories.slice(0, 2).map((item, idx) => (
          <div className="col-sm-6" key={idx}>
            <article className="product-item">
              <GatsbyImage
                image={getImage(item.category_image)}
                alt="category"
              />
              <div className="product-item__body">
                <h4 className="product-title">{item.category_name}</h4>
                <Link to="/products" className="btn btn-red">
                  View
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
export default HomeProducts
