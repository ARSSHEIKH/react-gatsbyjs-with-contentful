import React from "react"
import Layout from "../Components/Layout"
import { graphql, Link } from "gatsby"


const Products = ({ data:{allContentfulProducts:{nodes}} }) => {
     return (
    <div>
      <Layout>
        <h1>Products!</h1>
        <section style={{display:'flex', justifyContent:'space-around'}}>
            {nodes.map(product => {
                return(
                    <article key={product.id}>
                        <h2>{product.title}</h2>
                        <img src={product.images.fluid.src} alt={product.title} width={200} height={200}/>
                        <p>Rs. {product.price}</p>
                        <Link to={`/products/${product.slug}`}>More Info</Link>
                    </article>

                )
            })}
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
        slug
        images {
          fluid {
            src
          }
        }
      }
    }
}
`
export default Products
