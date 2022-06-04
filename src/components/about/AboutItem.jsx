import React from "react"

const AboutItem = ({ data }) => (
  <div className="col-sm-6">
    <div className="about-item">
      <div className="icon">
        <img src={data.icon} alt={data.title} />
      </div>
      <h3 className="title">{data.title}</h3>
      <p className="content">{data.content}</p>
    </div>
  </div>
)

export default AboutItem
