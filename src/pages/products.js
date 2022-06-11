import { graphql } from "gatsby"
import React, { useState } from "react"
import ProductItem from "../components/common/product-item"
import Layout from "../components/layout"
import Seo from "../components/seo"

const filters = ["All Products", "Bottle", "Sachet", "Jerrycan"]

const ProductGroup = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, idx) => (
        <div className="col-lg-4 col-sm-6" key={idx}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  )
}

const Products = ({ data }) => {
  const [filter, setFilter] = useState("All Products")

  const allProducts = data.allPrismicProduct.nodes

  return (
    <Layout>
      <Seo title="Products" />
      <div className="d-md-none mt-3">
        <h1 className="text-black text-uppercase ">Products</h1>
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
      <section className="section products-section">
        <div className="d-none d-md-block">
          <h1 className="text-white text-uppercase">Products</h1>
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

        {allProducts.filter(item => item.data.type === "Bottle").length > 0 && (
          <div
            className={`${
              filter === "All Products"
                ? "d-block"
                : filter === "Bottle"
                ? "d-block"
                : "d-none"
            }`}
          >
            <h3 className="product-type">Bottle</h3>
            <ProductGroup
              data={allProducts.filter(item => item.data.type === "Bottle")}
            />
          </div>
        )}
        {allProducts.filter(item => item.data.type === "Sachet").length > 0 && (
          <div
            className={`${
              filter === "All Products"
                ? "d-block"
                : filter === "Sachet"
                ? "d-block"
                : "d-none"
            }`}
          >
            <h3 className="product-type">Sachet</h3>
            <ProductGroup
              data={allProducts.filter(item => item.data.type === "Sachet")}
            />
          </div>
        )}
        {allProducts.filter(item => item.data.type === "Jerrycan").length >
          0 && (
          <div
            className={`${
              filter === "All Products"
                ? "d-block"
                : filter === "Jerrycan"
                ? "d-block"
                : "d-none"
            }`}
          >
            <h3 className="product-type">Jerrycan</h3>
            <ProductGroup
              data={allProducts.filter(item => item.data.type === "Jerrycan")}
            />
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Products

export const query = graphql`
  query Products {
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
