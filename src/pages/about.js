import React from "react"
import AboutItem from "../components/about/AboutItem"
import RoadItem from "../components/about/RoadItem"
import Footer from "../components/footer"
import Header from "../components/header"
import Seo from "../components/seo"
import { AboutHero } from "../utils/imgImport"
import { about_us, roadmap } from "../utils/staticData"

const AboutUs = () => (
  <>
    <Seo title="About Us" />
    <Header />
    <main>
      <section className="about-hero container">
        <img className="hero-img" src={AboutHero} alt="about hero" />
        <div className="row">
          <div className="col-sm-6">
            <h1>
              Feeding the world.
              <br /> Fuelling the future.
            </h1>
          </div>
          <div className="col-sm-6">
            <p className="hero-text mb-4">
              Wildsparks began in 2019 with the belief that Palm and its natural
              health benefits can be used to create great-tasting products that
              nourish consumers and fit into their daily lifestyles. We
              specialize in healthy palm-based products to give everyone the
              nutrition they need.
            </p>
            <p className="hero-text">
              At the same time, we realized that palm oil passed through too
              many intermediaries, compromising on quality and price. We are
              here to change this.
            </p>
            <p className="hero-text mt-4">
              By breaking down the supply chain we bring the final product
              closer to the end consumer. This means better yields for everyone;
              farmer, retailer and consumer.
            </p>
          </div>
        </div>
      </section>
      <section className="roadmap-section container">
        {roadmap.map((item, idx) => (
          <RoadItem data={item} idx={idx} key={idx} />
        ))}
      </section>
      <section className="about-section">
        <div className="container">
          <h2 className="heading">
            {`Better for Farmers.
          Better for Communities.
          Better for You!`}
          </h2>
          <div className="py-4 my-5 row">
            <div className="col-sm-6">
              <p className="about-text1">
                “ Wildsparks Palm oil is Nigeria's No.1 favourite palm oil
                brand. It is triple refined, has <strong>NO CHOLESTEROL</strong>{" "}
                & is absolutely free of transfat! “
              </p>
            </div>
            <div className="col-sm-6">
              <p className="about-text2">
                Wildsparks Palm oil offer consumers a healthier way to cook.
                They are free from artificial additives but contain essential
                Vitamins which help the body maintain a strong and healthy
                immune system. As part of a healthy diet, these products
                contribute to maintaining a healthy heart.
              </p>
            </div>
          </div>
          <div className="row">
            {about_us.map((item, idx) => (
              <AboutItem key={idx} data={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
)

export default AboutUs
