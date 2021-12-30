import styled from "styled-components"



export const Wrapper = styled.div`
  position: relative;

  img{
    max-height:680px;
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

  
  h1 {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    text-shadow: #000 2px 2px 2px;
    font-size: 2rem;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 0 10px;
    @media screen and (min-width: 768px) {
      font-size: 5rem;
    }
  }

  h2 {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    letter-spacing: 5px;
    padding: 0 10px;
    text-shadow: #000 2px 2px 2px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    text-transform: none;
    text-align: center;
    @media screen and (min-width: 768px) {
      font-size: 3rem;
    }
  }


  }
`
