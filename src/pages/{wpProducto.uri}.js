import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../components/PostSidebar/PostSidebar"
import { GatsbyImage } from "gatsby-plugin-image"
//Utils
import TransformOembedToIframe from "../utils/TransformOembedToIframe"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`
export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`
export const Image = styled.div`
  margin-bottom: 20px;
  width:100%;
  max-height: 100%;
  padding:50px;
  position: relative;
  overflow: hidden;

  img {
    transition: 0.3s ease-in;
  }

  :hover img {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`
const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`
const PostContent = styled.article`
  margin-top: 20px;
  max-width: 800px;
`
const ProyectTemplate = ({ data }) => (
  <Layout>
    <Wrapper>
      <BreadCrumb parent={{ uri: "/productos/all-products", title: "productos" }} />
      <ContentWrapper>
        <PostSidebar
          date={data.item.date}
          author={data.item.author.node.name}
          categories={data.item.categoriasProductos.nodes}
        />
        <PostContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.item.title }} />
          <Image>    
            <StyledImg
              image={
                data.item.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt="Blog Image"
            />   
          </Image>
          <div
            dangerouslySetInnerHTML={{
              __html: TransformOembedToIframe(data.item.content),
            }}
          />
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default ProyectTemplate

export const PageQuery = graphql`
  query ($id: String!) {
    item: wpProducto(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: TRACED_SVG)
            }
          }
        }
      }
      date(formatString: "DD MM YYYY")
      categoriasProductos {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`
