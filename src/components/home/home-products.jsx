import { Link } from "gatsby"
import React from "react"
import { products } from "../../utils/staticData"

const HomeProducts = () => {
  return (
    <section className="section home-products">
      <h1 className="text-white text-uppercase">Products</h1>
      <div className="row">
        {products.slice(0, 2).map((item, idx) => (
          <div className="col-sm-6" key={idx}>
            <article className="product-item">
              <img src={item.img} alt="prod item" />
              <div className="product-item__body">
                <h4 className="product-title">{item.title}</h4>
                <Link to={item.uid} className="btn btn-red">
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
