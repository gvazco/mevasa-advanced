import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #fff;
  max-width: 1180px;
  margin: 0 auto;
  text-align: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: right;
  }

  .about-text {
    padding: 40px 20px 20px 40px;

    @media screen and (max-width: 768px) {
      padding: 20px;
      ;
    }
  }
`

export const AboutImage = styled.div`
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  min-height: 300px;
`
