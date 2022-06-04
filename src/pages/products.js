import { Link } from "gatsby"
import React, { useState } from "react"
import Layout from "../components/layout"
import { Star } from "../utils/imgImport"
import { products } from "../utils/staticData"

const filters = ["All Products", "Bottle", "Sachet", "Jerrycan"]

const ProductGroup = ({ data }) => {
  return (
    <div className="row">
      {data.map((item, idx) => (
        <div className="col-lg-4 col-md-6" key={idx}>
          <article className="product-item">
            <img src={item.img} alt="product img" />
            <div className="product-info">
              <h4 className="product-title">{item.title}</h4>
              <p className="product-size">{item.size}</p>
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <img className="star" src={Star} alt="star" />
                  <p className="product-rate">{item.rate}/5</p>
                </div>
                <Link to={item.uid} className="btn btn-red">
                  View Product
                </Link>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  )
}

const Products = () => {
  const [filter, setFilter] = useState("All Products")
  return (
    <Layout>
      <section className="section products-section">
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

        {products.filter(item => item.type === "Bottle").length > 0 && (
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
              data={products.filter(item => item.type === "Bottle")}
            />
          </div>
        )}
        {products.filter(item => item.type === "Sachet").length > 0 && (
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
              data={products.filter(item => item.type === "Sachet")}
            />
          </div>
        )}
        {products.filter(item => item.type === "Jerrycan").length > 0 && (
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
              data={products.filter(item => item.type === "Jerrycan")}
            />
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Products
