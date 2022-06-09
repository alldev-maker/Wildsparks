import {
  Carbon,
  Consumer,
  Education,
  Facebook,
  Farmer,
  Instagram,
  Packaging,
  Planet,
  Prod1,
  Prod2,
  Recipe1,
  Recipe2,
  Recipe3,
  Retailer,
  Twitter,
  // Youtube,
} from "./imgImport"

export const nav_menus = [
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "About Us",
    to: "/about",
  },
  {
    name: "Recipes",
    to: "/recipes",
  },
  {
    name: "Where to Buy",
    to: "/where-to-buy",
  },
  {
    name: "Contact Us",
    to: "/contact",
  },
]

export const footer_menus = [
  {
    name: "Contact Us",
    to: "/contact",
  },
  {
    name: "Terms & Conditions",
    to: "/terms",
  },
  {
    name: "Privacy Policy",
    to: "/privacy",
  },
]

export const social_links = [
  { icon: Instagram, to: "https://instagram.com/WildsparksOil" },
  { icon: Facebook, to: "https://web.facebook.com/wildsparksoil" },
  { icon: Twitter, to: "https://twitter.com/WildsparksOil" },
  // { icon: Youtube, to: "/" },
]

export const products = [
  {
    uid: "/",
    title: "Palm Oil Sachets",
    size: "1 Litre Bottle",
    img: Prod1,
    rate: 4.35,
    type: "Bottle",
  },
  {
    uid: "/",
    title: "Wildsparks Palm Oil",
    size: "3 Litres Bottle",
    img: Prod2,
    rate: 4.5,
    type: "Sachet",
  },
  {
    uid: "/",
    title: "Palm Oil Sachets",
    size: "1 Litre Bottle",
    img: Prod1,
    rate: 4.35,
    type: "Jerrycan",
  },
  {
    uid: "/",
    title: "Wildsparks Palm Oil",
    size: "3 Litres Bottle",
    img: Prod2,
    rate: 4.5,
    type: "Bottle",
  },
  {
    uid: "/",
    title: "Palm Oil Sachets",
    size: "1 Litre Bottle",
    img: Prod1,
    rate: 4.35,
    type: "Bottle",
  },
  {
    uid: "/",
    title: "Wildsparks Palm Oil",
    size: "3 Litres Bottle",
    img: Prod2,
    rate: 4.5,
    type: "Sachet",
  },
  {
    uid: "/",
    title: "Palm Oil Sachets",
    size: "1 Litre Bottle",
    img: Prod1,
    rate: 4.35,
    type: "Jerrycan",
  },
  {
    uid: "/",
    title: "Wildsparks Palm Oil",
    size: "3 Litres Bottle",
    img: Prod2,
    rate: 4.5,
    type: "Bottle",
  },
]

export const recipes = [
  {
    uid: "/",
    title: "Recipe1",
    img: Recipe1,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe2",
    img: Recipe2,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe3",
    img: Recipe3,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe4",
    img: Recipe3,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe5",
    img: Recipe1,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe6",
    img: Recipe2,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe7",
    img: Recipe1,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe8",
    img: Recipe3,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe9",
    img: Recipe2,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe1",
    img: Recipe1,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe2",
    img: Recipe2,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe3",
    img: Recipe3,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe4",
    img: Recipe3,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe5",
    img: Recipe1,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe6",
    img: Recipe2,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe7",
    img: Recipe1,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe8",
    img: Recipe3,
    prep_time: 10,
    servings: 6,
  },
  {
    uid: "/",
    title: "Recipe9",
    img: Recipe2,
    prep_time: 10,
    servings: 6,
  },
]

export const roadmap = [
  {
    img: Farmer,
    title: "Farmer",
    content:
      "Our network of over 100 farmers supply their Palm Oil directly to one of our manufacturing and distribution hubs. Here, the oil is quality-checked, processed and bottled. As we control our own distribution and retail network, we pay farmers market-beating prices every time. Thanks to this, we get access to the highest quality palm oil on offer. In addition, we reinvest a portion of our profits into farmer development, through education, credit and consultancy.",
    btnName: "Supply to wildsparks",
    to: "/contact",
  },
  {
    img: Retailer,
    title: "Retailer",
    content:
      "From the hub, there are no more stops, as products are directly distributed to our network of over 2000 informal retailers across Nigeria. We do away with distribution partners and networks to remove unnecessary costs. We offer best-in-class margins to our retail partners. Further, we offer Wildsparks on credit to our micro-retail partners, meaning they don’t have to tie up hard-earned working capital into inventory.",
    btnName: "Become a retailer",
    to: "/contact",
  },
  {
    img: Consumer,
    title: "Consumer",
    content:
      "As a result of the benefits we get from direct distribution, the customer can always rest assured that with Wildsparks they are enjoying the highest-quality, sustainable palm oil. In every market Wildsparks is introduced, it quickly becomes a customer favourite. Being able to trace the source, the customer can rest assured that their palm oil is single-origin and sustainably sourced.",
    btnName: "Where to buy",
    to: "/where-to-buy",
  },
]

export const about_us = [
  {
    icon: Planet,
    title: "Our Planet Matters",
    content:
      "We do business the right way, not just the easy way. We act in ways to create a more sustainable and better future. We prioritize sustainability in our operations and communities.",
  },
  {
    icon: Packaging,
    title: "Sustainable Packaging",
    content:
      "Our goal is to recover every bottle that is sold to recycle and reuse, no matter the size, shape or material.",
  },
  {
    icon: Carbon,
    title: "Reducing Carbon Footprint",
    content:
      "We have a responsibility to contribute solutions to climate change. We set a target to reduce our carbon emissions x% by 2030 through conserving high-carbon-stock forests and using renewable and clean energy sources.",
  },
  {
    icon: Education,
    title: "Farmer Education",
    content:
      "We are continuously training farmers on sustainable agricultural & cultivation practices to support healthy soils capable of storing carbon and protect biodiversity.",
  },
]
