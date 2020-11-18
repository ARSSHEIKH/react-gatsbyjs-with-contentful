import React from "react"
import { Link } from "gatsby"
import navBar from "./navbar.css"

export default function NavBar() {
  return (
    <div> 
      <ul className="navBarLinks">
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/Blog">Blog Page</Link></li>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/products">Product Page</Link></li>
      </ul>
    </div>
  )
}