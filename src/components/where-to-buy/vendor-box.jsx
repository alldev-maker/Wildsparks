import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const VendorBox = ({ vendor }) => (
  <div className="vendor-box">
    <GatsbyImage
      className="vendor-image"
      image={getImage(vendor.image)}
      alt={vendor.name}
    />
    <h4 className="vendor-name">{vendor.name}</h4>
    <p className="vendor-address">
      <strong>Address: </strong>
      {vendor.address}
    </p>
  </div>
)

export default VendorBox
