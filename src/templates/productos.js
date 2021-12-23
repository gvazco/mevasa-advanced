import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ProductList from "../components/ProductList/ProductList"
import ProductsSidebar from "../components/ProductsSidebar/ProductsSidebar"

//Component Styles
import { Wrapper, ContentWrapper, PageContent } from "./archive.styles"

export default function Productos(props) {
  const { data, pageContext } = props
  const productos = data.allWpProducto.nodes

  return (
    <Layout>
      <StaticImage
        src="../images/archive_headerimage.png"
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
            <ProductList productos={productos} />
          </PageContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpProducto(
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        uri
        slug
        id
        content
        excerpt
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 800, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`
