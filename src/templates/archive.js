import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar"
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
} from "./archive.styles"

const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => (
  <Layout>
    <Seo 
      title="Blog de Techos y Mantenimientos | Mevasa"
		  description="Este es el blog corporativo de Mevasa"
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
          uri: "/blog/all-posts",
          title: "blog",
        }}
      />
      <ContentWrapper>
        <ArchiveSidebar catId={catId} categories={categories.edges} />
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          <div className="productos-list">
          {allWpPost.edges.map(post => (
            <article key={post.node.id} className="entry-content">
              {post.node.featuredImage !== null ? (
                <Image>
                  <Link to={`/blog${post.node.uri}`}>
                    <StyledImg
                      image={
                        post.node.featuredImage.node.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt="Blog Image"
                    />
                  </Link>
                </Image>
              ) : null}
              <div className="content">
                <Link to={`/blog${post.node.uri}`}>
                  <StyledH2
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                  />
                </Link>

                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                <StyledReadMore to={`/blog${post.node.uri}`}>
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

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      sort: { fields: date, order: DESC }
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
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
