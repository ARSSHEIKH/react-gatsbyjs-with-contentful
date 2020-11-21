import React from "react"
import Layout from "../Components/Layout"

const ProjectTemplates = ({ pageContext: { projects } }) => {
  console.log('props', projects);
  return (
    <Layout>
      <h3>Product Details</h3>
      <section style={{display:'flex', justifyContent:'center', flexFlow:'column', alignItems:'center'}}>

        <h2>{projects.title}</h2>
        <frameset cols="50%,50%">
            <frame src={projects.siteUrl} />
        </frameset>
      </section>
    </Layout>
  )
}

export default ProjectTemplates