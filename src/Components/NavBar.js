import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <div> 
      <ul>
        <li><Link to="/">Home Page</Link></li>
        <li><Link to="/Blog">Blog Page</Link></li>
        <li><Link to="/about">About Page</Link></li>
        <li><Link to="/products">Product Page</Link></li>
      </ul>
    </div>
  )
}