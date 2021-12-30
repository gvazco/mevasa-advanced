import React from "react"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import CTAArea from "../components/CTAArea/CTAArea"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero />
    <About />
    <CTAArea />
  </Layout>
)

export default IndexPage
