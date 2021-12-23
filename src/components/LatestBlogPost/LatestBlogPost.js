import React from "react"
import { Link } from "gatsby"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import {
  Wrapper,
  StyledImg,
  Image,
  ImageTextWrapper,
  ImageText,
  Html,
} from "./LatesBlogPost.styles"
import { node } from "prop-types"

const LatestBlogPost = () => {
  const data = useLatestBlogPost()
  console.log(data)

  return (
    <Wrapper data-aos="zoom-in">
      <h1>Últimas Publicaciones</h1>

      <Image>
        <StyledImg
          image={
            data.allWpPost.edges[0].node.featuredImage.node.localFile
              .childImageSharp.gatsbyImageData
          }
          alt="Blog Image"
        />
        <Link to={`/blog${data.allWpPost.edges[0].node.uri}`}>
          <ImageTextWrapper>
            <ImageText>{data.allWpPost.edges[0].node.title}</ImageText>
          </ImageTextWrapper>
        </Link>
      </Image>
      <Html
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.excerpt,
        }}
      />
      <Link to={`/blog${data.allWpPost.edges[0].node.uri}`}>
        <h5>Ver Más...</h5>
      </Link>
    </Wrapper>
  )
}

export default LatestBlogPost
