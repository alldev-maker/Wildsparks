import React, { useState } from "react"
import { Link } from "gatsby"
import { Logo } from "../utils/imgImport"
import { nav_menus } from "../utils/staticData"
import ConnectUs from "./common/connect-with-us"

const Header = () => {
  const [hambugerActive, setHambugerActiveState] = useState(false)

  const hamburgerHandler = () => {
    setHambugerActiveState(!hambugerActive)
  }

  let humbugerClsName = "hamburger "
  let navMenuClsName = "navbar-nav "

  if (hambugerActive) {
    humbugerClsName += "active"
    navMenuClsName += "active"
  }

  return (
    <header className="container">
      <nav className="navbar">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <ul className={navMenuClsName}>
          {nav_menus.map((item, idx) => (
            <li className="nav-item" key={idx}>
              <Link className="nav-link" activeClassName="active" to={item.to}>
                {item.name}
              </Link>
            </li>
          ))}
          <li className="nav-item mt-auto">
            <ConnectUs />
          </li>
        </ul>
        <div
          className={humbugerClsName}
          onClick={hamburgerHandler}
          onKeyDown={hamburgerHandler}
          role="button"
          tabIndex="0"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}

export default Header
