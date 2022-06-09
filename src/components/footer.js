import { Link } from "gatsby"
import React from "react"
import { Logo } from "../utils/imgImport"
import { footer_menus } from "../utils/staticData"
import ConnectUs from "./common/connect-with-us"

const Footer = () => (
  <footer className="container">
    <ConnectUs />
    <ul className="footer-nav">
      {footer_menus.map((item, idx) => (
        <li key={idx}>
          <Link to={item.to}>{item.name}</Link>
        </li>
      ))}
    </ul>
    <div className="py-4 text-center">
      <img className="logo" src={Logo} alt="logo" />
    </div>
    <p className="text-center">
      © {new Date().getFullYear()} Wildsparks Nigeria, an Africa’s Favourite
      Brands Company
    </p>
  </footer>
)

export default Footer
