import styled from "styled-components"
import { Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`

export const Image = styled.div`
  margin-bottom: 20px;
  width:100%;
  max-height: 100px;
  position: relative;
  overflow: hidden;

  img {
    filter: brightness(90%);
    transition: 0.3s ease-in;
  }

  :hover img {
    filter: brightness(100%);
    transform: scale(1.1);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    max-height: 300px;
    width: 100%;
  }
`
export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`

export const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const PageContent = styled.article`
  margin: 20px 0 20px 0;

  .productos-list{
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 0 20px;
    
    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

  }

  .entry-content {
      width: 100% !important;
      box-shadow: 3px 3px 5px #999 !important;
      padding:5px;
    }

    .content {
      padding: 20px;
      p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 25px;
        max-height: 100px;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        font-size: 16px;
      }
    }
  }

`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 20px;
  color: #000;
  :hover {
     color: #ff6600;
  }
`

export const StyledDate = styled.div`
  font-family: "Chub Gotic", sans-serif;
  font-size: 1rem;
  font-weight: 600;
`

export const StyledReadMore = styled(Link)`
  font-family: "Chub Gotic", sans-serif;
  font-size: 0.85rem;
  font-weight: 800;
  color: #000;
  position: relative;
  width: 120px;
  height: 35px;
  display: block;
  background: #fff;
  padding: 3px 0 0 10px;


  :hover {
    background: #ff6600;
    color: #fff;
  }
`