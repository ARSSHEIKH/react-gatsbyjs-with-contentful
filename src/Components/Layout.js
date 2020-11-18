import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
import NavBar2 from "./Nav"

const Layout = ({children}) => {
  return (
    <div>      
        <NavBar2/>
        <NavBar/>
          <main>{children}</main>
        <Footer/>

    </div>
  )
}
export default Layout