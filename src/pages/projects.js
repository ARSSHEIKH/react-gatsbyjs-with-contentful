import React from "react"
import Layout from "../Components/Layout"
import GetSearchData from "../Components/FuncSearch"
import { graphql, Link } from "gatsby"
import secProjects from "./style.css"

function About({ data:{allContentfulProjects:{nodes}} }) {
    GetSearchData(nodes)
    return (
        <div>
            <Layout>
                <h1>Projects</h1>       
                <section className="secProjects">
                    {nodes.map(projects => {
                        return(
                            <article key={projects.id} className="artiProjects">
                                <h4>{projects.title}</h4>
                                <img src={projects.images.fluid.src} alt={projects.title} width={200} height={200}/><br/>
                                <Link to={`/projects/${projects.slug}`}>More Info</Link>
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
    allContentfulProjects {
        nodes {
          siteUrl
          slug
          title
          images {
            fluid {
              src
            }
          }
        }
    }  
}
`
export default About;