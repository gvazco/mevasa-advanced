import React from "react"
import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import CTAArea from "../components/CTAArea/CTAArea"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Venta e instalación de lámina y productos derivados del acero | Mevasa" />
    <Hero data-aos="zoom-in" />
    <About data-aos="fade-up" />
    <CTAArea data-aos="fade-up" />
  </Layout>
)

export default IndexPage
