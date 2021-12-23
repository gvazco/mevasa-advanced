import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import ProductsSidebar from "../../components/ProductsSidebar/ProductsSidebar"
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"

//Component Styles
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  Image,
  StyledImg,
} from "./producto.styles"

export default function producto(props) {
  const { pageContext } = props
  const { data: producto } = pageContext

  return (
    <Layout>
      <StaticImage
        src="../../images/archive_headerimage.png"
        placeholder="TRACED_SVG"
        layout="constrained"
        width={1920}
        height={300}
        alt="Blog Image Post"
      />
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/productos",
            title: "productos",
          }}
        />
        <ContentWrapper>
          <ProductsSidebar />
          <PageContent>
            <h1 dangerouslySetInnerHTML={{ __html: producto.title }} />
            <article>
              <div
                dangerouslySetInnerHTML={{
                  __html: TransformOembedToIframe(producto.content),
                }}
              />
            </article>
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}
