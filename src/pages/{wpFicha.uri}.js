import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//Components
import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../components/PostSidebar/PostSidebar"
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

  iframe {
    width: 100%;
  }
`

const FichaTemplate = ({ data }) => (
  <Layout>
    <Wrapper>
      <BreadCrumb
        parent={{
          uri: "/fichas_tecnicas/all-fichas",
          title: "fichas técnicas",
        }}
      />
      <ContentWrapper>
        <PostSidebar
          date={data.ficha.date}
          author={data.ficha.author.node.name}
          categories={data.ficha.marcas.nodes}
        />
        <PostContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.ficha.title }} />
          <div
            dangerouslySetInnerHTML={{
              __html: TransformOembedToIframe(data.ficha.content),
            }}
          />
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default FichaTemplate

export const PageQuery = graphql`
  query ($id: String!) {
    ficha: wpFicha(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      marcas {
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
