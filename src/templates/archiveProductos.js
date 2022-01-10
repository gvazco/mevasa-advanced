import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ProductosSidebar from "../components/ProductosSidebar/ProductosSidebar"
import Pagination from "../components/Pagination/Pagination"
import Seo from "../components/SEO/SEO"
import imageBlog from "../images/remates.jpg"

//Component Styles
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledReadMore,
  Image,
  StyledImg,
} from "./archiveProductos.styles"

const archiveProductos = ({
  data: { allWpProducto },
  pageContext: {
    catId,
    catName,
    catUri,
    categoriasProductos,
    numPages,
    currentPage,
  },
}) => (
  <Layout>
    <Seo
      title="Catálogo de productos | Mevasa"
      description="Catálogo de productos derivados del acero, accesorios y herraientas para la construcción."
      image={imageBlog}
    />
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
          uri: "/productos/all-products",
          title: "productos",
        }}
      />
      <ContentWrapper>
        <ProductosSidebar
          catId={catId}
          categoriasProductos={categoriasProductos.edges}
        />
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          <div className="productos-list">
            {allWpProducto.edges.map(product => (
              <article key={product.node.id} className="entry-content">
                {product.node.featuredImage !== null ? (
                  <Image>
                    <Link to={product.node.uri}>
                      <StyledImg
                        image={
                          product.node.featuredImage.node.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        alt="Galeria Image"
                      />
                    </Link>
                  </Image>
                ) : null}
                <div className="content">
                  <Link to={product.node.uri}>
                    <StyledH2
                      dangerouslySetInnerHTML={{ __html: product.node.title }}
                    />
                  </Link>
                  <p
                    dangerouslySetInnerHTML={{ __html: product.node.excerpt }}
                  />
                  <StyledReadMore to={product.node.uri}>
                    Leer más...
                  </StyledReadMore>
                </div>
                <div className="dot-divider" />
              </article>
            ))}
          </div>
          <Pagination
            catUri={catUri}
            page={currentPage}
            totalPages={numPages}
          />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default archiveProductos

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpProducto(
      sort: { fields: date, order: DESC }
      filter: {
        categoriasProductos: { nodes: { elemMatch: { id: { eq: $catId } } } }
      }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
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
  }
`
