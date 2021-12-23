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

export const FrontImg = styled(GatsbyImage)`
  max-height: 950px;
  margin-top: 20px;
`
export const FrontText = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
`

export const Wrapper = styled.div`
  position: relative;
`

export const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

   @media (min-width: 1920px) {
    left: 100px;

  } ;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
    position: relative;
    bottom: 90px;
    width: 100px;
    height: 35px;
    display: block;
    background: #000;
    padding: 3px 0 0 10px;
    margin-bottom: 30px;

    @media (min-width: 992px) {
      width: 120px;
      height: 50px;
      bottom: 150px;
      font-size: 1.5rem;

      :after{
        border-width: 25px !important;
        top: 30% !important;
      }
    }

    :after {
      left: 100%;
      top:44%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-left-color: #000;
      border-width: 17px;
      margin-top: -15px;
    }

    :hover {
      background: #f26e3b;
    }

    :hover:after {
      border-left-color: #f26e3b;
    
    
    
  }

  h1 {
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;
    font-family: "Teko", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    text-shadow: #000 2px 2px 2px;
    width: 66%;
    text-align: center;
    font-weight: bold;
    @media screen and (min-width: 768px) {
      line-height: 80px;
      font-size: 4rem;
    }
  }
`
