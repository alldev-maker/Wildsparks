import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Star } from "../../utils/imgImport"

const ProductItem = ({ product }) => (
  <article className="product-item">
    <GatsbyImage
      image={getImage(product.data.product_image)}
      alt={product.data.product_name}
    />
    <div className="product-info">
      <h4 className="product-title">
        {product.data.product_name.split(" - ")[0]}
      </h4>
      <p className="product-size">
        {product.data.product_name.split(" - ")[1] + " " + product.data.type}
      </p>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img className="star" src={Star} alt="star" />
          <p className="product-rate">{product.data.rating}/5</p>
        </div>
        <Link to={`/product/${product.uid}`} className="btn btn-red">
          View Product
        </Link>
      </div>
    </div>
  </article>
)

export default ProductItem
