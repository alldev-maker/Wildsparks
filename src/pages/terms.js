import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PrivacyHero } from "../utils/imgImport"

const Terms = ({ data }) => {
  const terms = data.allPrismicTerms.nodes[0].data
  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <section className="my-4 mb-5">
        <img className="hero-img w-100" src={PrivacyHero} alt="privacy hero" />
      </section>
      <section className="privacy-hero terms">
        <div className="heading">
          <h1>Terms & Conditions</h1>
          <p>{terms.heading_text}</p>
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: terms.body_text.html }}
        />
      </section>
    </Layout>
  )
}

export default Terms

export const query = graphql`
  query Terms {
    allPrismicTerms {
      nodes {
        data {
          heading_text
          body_text {
            html
          }
        }
      }
    }
  }
`
