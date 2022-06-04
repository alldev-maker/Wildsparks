import React from "react"
import { social_links } from "../../utils/staticData"

const ConnectUs = () => (
  <div className="connect-us">
    <p>{`Want more?
    Connect with us`}</p>
    <ul>
      {social_links.map((item, idx) => (
        <li key={idx}>
          <a href={item.to}>
            <img src={item.icon} alt="social icon" />
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default ConnectUs
