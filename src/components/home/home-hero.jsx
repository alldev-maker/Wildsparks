import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import { HeroImg } from "../../utils/imgImport"

const heros = [HeroImg, HeroImg, HeroImg]

const HeroSection = () => (
  <section className="hero-section">
    <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
      {heros.map((item, idx) => (
        <SwiperSlide key={idx}>
          <img className="hero-img" src={item} alt="hero img" />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
)

export default HeroSection
