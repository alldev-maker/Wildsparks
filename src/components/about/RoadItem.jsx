import { Link } from "gatsby"
import React from "react"

const RoadItem = ({ data, idx }) => (
  <div
    className={`row align-items-center road-item ${
      (idx + 1) % 2 === 0 ? "flex-row-reverse" : ""
    }`}
  >
    <div className="col-md-6">
      <div className="road-img">
        <img src={data.img} alt="road img" />
      </div>
    </div>
    <div className="col-md-6">
      <div>
        <h2 className="title">{data.title}</h2>
        <p className="content">{data.content}</p>
        <Link className="btn btn-red" to={data.to} state={{ leadForm: true }}>
          {data.btnName}
        </Link>
      </div>
    </div>
  </div>
)

export default RoadItem
