import React from "react"
import Layout from "../Components/Layout"

const ProductTemplates = ({ pageContext: { products } }) => {
  console.log('props', products);
  return (
    <Layout>
      <h3>Product Details</h3>
      <section style={{display:'flex', justifyContent:'center', flexFlow:'column', alignItems:'center'}}>

        <h2>{products.title}</h2>
        <img src={products.images.fluid.src} alt={products.title} width={200} height={200} />
        <p>{products.info.info}</p>
        <p>Rs. {products.price}</p>

      </section>
    </Layout>
  )
}

export default ProductTemplates