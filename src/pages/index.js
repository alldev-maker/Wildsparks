import * as React from "react"
import HomeHero from "../components/home/home-hero"
import HomeProducts from "../components/home/home-products"
import HomeRecipes from "../components/home/home-recipes"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeHero />
    <HomeProducts />
    <HomeRecipes />
  </Layout>
)

export default IndexPage
