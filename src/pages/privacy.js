import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PrivacyHero } from "../utils/imgImport"

const Privacy = ({ data }) => {
  const privacy = data?.allPrismicPrivacyPolicy.nodes[0].data

  return (
    <Layout>
      <Seo title="Privacy Policy" />
      <section className="my-4 mb-5">
        <img className="hero-img w-100" src={PrivacyHero} alt="privacy hero" />
      </section>
      <section className="privacy-hero">
        <div className="heading">
          <h1>Privacy Heading</h1>
          <p>{privacy.heading_text}</p>
        </div>

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: privacy.body_text.html }}
        />
      </section>
    </Layout>
  )
}
export default Privacy

export const query = graphql`
  query Privacy {
    allPrismicPrivacyPolicy {
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
