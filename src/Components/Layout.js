import React from "react"
import Footer from "./Footer"
import NavBar2 from "./Nav"

const Layout = ({children}) => {
  return (
    <div>      
        <NavBar2/>
          <main>{children}</main>
        <Footer/>

    </div>
  )
}
export default Layout