import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//Components
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../../components/PostSidebar/PostSidebar"
import Seo from "../../components/SEO/SEO"
import { GatsbyImage } from "gatsby-plugin-image"
import imageBlog from "../../images/remates.jpg"
//Utils
import TransformOembedToIframe from "../../utils/TransformOembedToIframe"

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
const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`
const Image = styled.div`
  margin-bottom: 20px;
  width:100%;
  max-height: 100%;
  padding:20px;
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

const PostContent = styled.article`
  margin-top: 20px;
  max-width: 800px;

  iframe {
    width: 100%;
  }
`

const PostTemplate = ({ data }) => (
  <Layout>
  <Seo 
      title={data.post.title}
		  description={data.post.content}
			image={imageBlog}
    />
    <Wrapper>
      <BreadCrumb parent={{ uri: "/blog/all-posts", title: "blog" }} />
      <ContentWrapper>
        <PostSidebar
          date={data.post.date}
          author={data.post.author.node.name}
          categories={data.post.categories.nodes}
        />
        <PostContent>
          <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
          <Image>    
            <StyledImg
              image={
                data.post.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
              alt="Blog Image"
            />   
          </Image>
          <div
            dangerouslySetInnerHTML={{
              __html: TransformOembedToIframe(data.post.content),
            }}
          />
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default PostTemplate

export const PageQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
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
      categories {
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
