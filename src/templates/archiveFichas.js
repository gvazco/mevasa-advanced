import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import FichasSidebar from "../components/FichasSidebar/FichasSidebar"
import Pagination from "../components/Pagination/Pagination"

//Component Styles
import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
  Image,
  StyledImg,
} from "./archiveFichas.styles"

const archiveFichas = ({
  data: { allWpFicha },
  pageContext: { catId, catName, catUri, marcas, numPages, currentPage },
}) => (
  <Layout>
    <StaticImage
      src="../images/archive_headerimage.png"
      placeholder="TRACED_SVG"
      layout="constrained"
      width={1920}
      height={300}
      alt="Ficha Image Ficha"
    />
    <Wrapper>
      <BreadCrumb
        parent={{
          uri: "/fichas_tecnicas/all-fichas",
          title: "fichas",
        }}
      />
      <ContentWrapper>
        <FichasSidebar catId={catId} marcas={marcas.edges} />
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {allWpFicha.edges.map(ficha => (
            <article key={ficha.node.id} className="entry-content">
              {ficha.node.featuredImage !== null ? (
                <Image>
                  <Link to={ficha.node.uri}>
                    <StyledImg
                      image={
                        ficha.node.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Ficha Image"
                    />
                  </Link>
                </Image>
              ) : null}
              <Link to={ficha.node.uri}>
                <StyledH2
                  dangerouslySetInnerHTML={{ __html: ficha.node.title }}
                />
              </Link>

              <StyledDate
                dangerouslySetInnerHTML={{ __html: ficha.node.date }}
              />
              <p dangerouslySetInnerHTML={{ __html: ficha.node.excerpt }} />
              <StyledReadMore to={ficha.node.uri}>Leer más...</StyledReadMore>
              <div className="dot-divider" />
            </article>
          ))}
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

export default archiveFichas

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpFicha(
      sort: { fields: date, order: DESC }
      filter: { marcas: { nodes: { elemMatch: { id: { eq: $catId } } } } }
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
