import styled from "styled-components"

import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 640px;
  margin-bottom: 60px;
  width: 100%;
  filter: brightness(85%);

  @media (min-width: 1920px) {
    max-height: 640px !important;
  } ;
`

export const Wrapper = styled.div`
  position: relative;

  img {
    filter: brightness(0.65);
  }
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 450px) {
    top: 20px;
  }

  h1 {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    text-shadow: #000 2px 2px 2px;
    font-size: 1.3rem;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 0 10px;

    @media screen and (min-width: 450px) {
      font-size: 2.1rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 5rem;
    }
  }

  h2 {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    padding: 0 10px;
    text-shadow: #000 2px 2px 2px;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;

    @media screen and (max-width: 320px) {
      display: none;
    }

    @media screen and (min-width: 450px) {
      font-size: 1.6rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }
`
