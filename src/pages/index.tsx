import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import BackgroundImage from "gatsby-background-image"

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface HeroImageProps {
  image: any
  description: string
}

const HeroImage = ({ image, description }: HeroImageProps) => {
  return (
    <BackgroundImage
      Tag="section"
      fluid={image}
      backgroundColor={`#040e18`}
      style={{
        width: "100%",
        height: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white" }}>{description}</h1>
    </BackgroundImage>
  )
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      splash: file(absolutePath: { regex: "/splash.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1600, maxHeight: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <IndexLayout>
      <HeroImage
        image={data.splash.childImageSharp.fluid}
        description="Image by Mikael Gustaffson"
      />
      <Page>
        <Container>
          <a href="https://mikaelgustafsson.artstation.com/">Splash image by Mikael Gustaffson</a>
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default IndexPage
