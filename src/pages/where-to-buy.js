import React from "react"
import { graphql } from "gatsby"
import { useLoadScript } from "@react-google-maps/api"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from "../components/common/map"
import VendorBox from "../components/where-to-buy/vendor-box"

const WhereToBuy = ({ data }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBHTbwUKwovHd6uO71iWD2teU-OF_6UCaU", // Add your API key
  })
  const vendors = data.allPrismicVendor.nodes

  return (
    <Layout>
      <Seo title="Where to buy" />
      <section className="section where-to-buy">
        <h1 className="text-white text-uppercase">where to buy</h1>
        <div className="map-container d-none d-md-block">
          {isLoaded ? <Map vendors={vendors} /> : <></>}
        </div>
        <div className="row d-md-none">
          {vendors.map((item, idx) => (
            <div className="col-12" key={idx}>
              <VendorBox vendor={item.data} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default WhereToBuy

export const query = graphql`
  query WhereBuy {
    allPrismicVendor {
      nodes {
        data {
          name
          address
          image {
            gatsbyImageData
          }
          location {
            longitude
            latitude
          }
        }
      }
    }
  }
`
