import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`
export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.3rem;
  padding: 5px;
  :hover {
    color: #f26e3b;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px; */
  max-width: 1180px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;

@media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .productos-list__item {
     width: 100% !important;
     box-shadow: 3px 3px 5px #999 !important;
     padding:5px;
   }
`

export const Wrap = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 25px;
    max-height: 100px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    font-size: 18px;
  }
`
