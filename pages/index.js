import React from "react"
import Layout from "../Components/Layout"
import styled from 'styled-components'

// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #E9967A;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export default function Home() {
  return (
      <Layout>
        <Wrapper>
          <Title className="dispName">
              <img src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.1997-6/p100x100/112888754_3632034920154078_2727959694246790677_n.png?_nc_cat=101&ccb=2&_nc_sid=ac3552&_nc_ohc=rI52JBLAWTcAX8JKhDd&_nc_ht=scontent.fkhi8-1.fna&oh=21aa49617ba2b8a7fa274a6e2490b0a7&oe=5FE51469"/>
              Hi! My Name is Arsalan
          </Title>
        </Wrapper>
      </Layout>
  )
}
