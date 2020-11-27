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
                        if(projects.title == "Simple Calculator" || projects.title == "Quiz App" || projects.title == "eBooks Store" || projects.title == "Todo App"){
                            return(
                                <article id={projects.id} key={projects.id} className="artiProjects">
                                    
                                    <Link to={`/projects/${projects.slug}`} className="LnkProjects">
                                        <div className="dvProjectItems">
                                            <h4>{projects.title}</h4>
                                            <b style={{color: "gray"}}>Under Development</b>
                                            <img src={projects.images.fluid.src} alt={projects.title} width={200} height={200}/><br/>
                                        </div>
                                    </Link>
                                    
                                </article>
                            )
                        }
                        return(
                            <article key={projects.id} className="artiProjects">
                                <Link to={`/projects/${projects.slug}`} className="LnkProjects">
                                    <div className="dvProjectItems">
                                        <h4>{projects.title}</h4>
                                        <img src={projects.images.fluid.src} alt={projects.title} width={200} height={200}/><br/>
                                    </div>
                                </Link>
                                    
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