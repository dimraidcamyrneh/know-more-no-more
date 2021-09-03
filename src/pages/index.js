import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Steven Parrino, Untitled, 1998, Enamel and graphite pencil on paper, 17 1/8 × 18 7/8in"
        src="../images/Parrino_Steven-1998-Untitled.jpeg"
      />
    </Layout>
  )
}

export default IndexPage