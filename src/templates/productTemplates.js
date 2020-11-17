import React from "react"
import Layout from "../Components/Layout"
import { graphql, Link } from "gatsby"

// Chloe Deee and Brooklyn blue
const ProductTemplates = ({ data: { allContentfulProducts: { nodes } } }) => {
  return (
    <div>
      <Layout>
        <h1>Products!</h1>
        <section style={{ display: 'flex', justifyContent: 'space-around' }}>

          <article key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.images.fluid.src} alt={product.title} width={200} height={200} />
            <p>Rs. {product.price}</p>
            <p>{product.info.info}</p>
          </article>

        </section>
      </Layout>
    </div>
  )
}
export const query = graphql`
{
  allContentfulProducts {
    nodes {
      id
      title
      price
      info {
        info
      }
      images {
        fluid {
          src
        }
      }
    }
  }
}
`
export default ProductTemplates