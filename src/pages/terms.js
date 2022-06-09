import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PrivacyHero } from "../utils/imgImport"

const Terms = () => (
  <Layout>
    <Seo title="Privacy Policy" />
    <section className="my-4 mb-5">
      <img className="hero-img w-100" src={PrivacyHero} alt="privacy hero" />
    </section>
    <section className="privacy-hero terms">
      <div className="heading">
        <h1>Terms & Conditions</h1>
        <p>
          Welcome to the Wildsparks web site. Below you will find our Privacy
          Policy regarding any personal information that you may supply to us
          through this web site.
        </p>
      </div>

      <div className="content">
        <p>
          It is our aim through this Wildsparks Policy to explain what
          information we collect about you and why we collect that information.
          We also want to make sure you understand how we use and share your
          information and the choices available to you. Our goal is to earn and
          keep your trust as you visit websites and applications about our
          products and brands.
        </p>
        <p>
          This Policy describes how we treat personal information on websites
          (“sites”), mobile or social media applications (“apps”), and any other
          services where we include an authorized link or reference to this
          Policy (together, the “Services”). This Policy does not describe our
          practices on sites or apps where it is not referenced. Your use of our
          apps and sites indicates you agree to our collection, use, and sharing
          of your information as set forth in this Policy.
        </p>

        <h4>WHAT INFORMATION DO WE COLLECT?</h4>
        <p>
          We collect identifiers and contact information. For example, we may
          collect your name and street address if you register on our site or
          apps. We may also collect your phone number or email address. We also
          collect online identifiers. For example, if you engage with us through
          a social media site, we may collect your social media user identifier.
        </p>
        <p>
          We collect payment information. If you make purchases with us, we (or
          our business partners who process credit cards for us) may collect
          your billing information. This includes your credit card number.
        </p>
        <p>
          We collect information you submit or otherwise provide or authorize us
          to collect. We collect the information you post in a public space on
          our site. This includes comments and videos or photos. We also collect
          any other information you may provide to us or authorize us to
          collect. This may include information about your physical activities
          or your nutrition preferences.
        </p>
      </div>
    </section>
  </Layout>
)

export default Terms
