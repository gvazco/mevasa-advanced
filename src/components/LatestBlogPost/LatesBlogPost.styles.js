import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`

export const Image = styled.div`
  margin-bottom: 20px;
  max-height: 100px;
  position: relative;
  overflow: hidden;

  img {
    filter: brightness(70%);
    transition: 0.3s ease-in;
  }

  :hover img {
    filter: brightness(100%);
    transform: scale(1.1);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    max-height: 200px;
    width: 100%;
  }
`

export const ImageTextWrapper = styled.div`
  position: absolute;
  color: #fff !important;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const ImageText = styled.h1`
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  font-family: "Teko";
  color: #fff !important;
  font-weight: 700;
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0px;
  padding: 0px;
  letter-spacing: 3px;
  text-shadow: #000 2px 2px;
  width: 80%;
  @media (min-width: 768px) {
    font-size: 2.1rem;
  }
`

export const Wrapper = styled.div`
  max-width: 900px;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  padding-top: 40px;
  border-top: 1px solid #ddd;
  text-align: center;
`

export const Html = styled.div`
  text-align: justify;

  @media (min-width: 768px) {
    padding: 0 30px;
  }
`
