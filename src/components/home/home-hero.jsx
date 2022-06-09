import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const HeroSection = () => {
  const heroSlider = useStaticQuery(graphql`
    query sliderQuery {
      allPrismicSlider {
        nodes {
          data {
            images {
              image {
                gatsbyImageData
                alt
              }
            }
          }
        }
      }
    }
  `)

  const slides = heroSlider.allPrismicSlider.nodes[0].data.images

  return (
    <section className="hero-section">
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <GatsbyImage
              className="hero-img"
              image={getImage(slide.image)}
              alt={slide.alt ? slide.alt : "hero img"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection
