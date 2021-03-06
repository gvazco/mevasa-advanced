import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../components/PostSidebar/PostSidebar"
import Seo from "../components/SEO/SEO"
import imageBlog from "../images/remates.jpg"
//Utils
import TransformOembedToIframe from "../utils/TransformOembedToIframe"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
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
  <Seo 
      title={data.item.title}
		  description={data.item.content}
			image={imageBlog}
    />
    <Wrapper>
      <BreadCrumb parent={{ uri: "/portafolio/all-proyects", title: "portafolios" }} />
      <ContentWrapper>
        <PostSidebar
          date={data.item.date}
          author={data.item.author.node.name}
          categories={data.item.categoriasPortafolios.nodes}
        />
        <PostContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.item.title }} />
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
    item: wpProyecto(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categoriasPortafolios {
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
