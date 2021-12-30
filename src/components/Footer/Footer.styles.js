import styled from "styled-components"

export const Credits = styled.div`
  color: #fff;
  
  background: #0c0c0c;
  text-align: center;
  padding: 20px 10px 20px 10px;
  font-family: "Teko", Arial, Helvetica, sans-serif;

  a {
    color: #fff;
  }

  a:hover {
    color: #ff6600;
    cursor: pointer;
  }
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
  font-family: "Teko", Arial, Helvetica, sans-serif;

  a{
    color:#000;

    :hover{
      color:#ff6600;
    }
  }

  
`
export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-align: space-between;
  color: #000;
  max-height: 1350px;
  padding: 50px 0;
  box-shadow: 7px -7px 14px 3px #d1d1d1, 7px 7px 14px 3px #fff;
  

  @media screen and (min-width: 992px) {
      padding: 120px 0;
    }

  .content-wrapper{
    max-width: 1180px;
    margin: 0 auto;
  }

  p {
    margin: 0;
    padding: 0;
    font-family: 'Teko', Arial, Helvetica, sans-serif;
  }

  

  .listing {
  
  list-style:none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px; */
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 25px;
  text-align: left;

  
  li.menu{
    p{
      line-height: 35px;
    }
  }

    li > p {
      
    font-size:20px;
    line-height: 35px;
    color:#000;
    font-family: 'Teko', Arial, Helvetica, sans-serif;
      a{
        color:#000;
        :hover {
        color: #f26e3b;
        line-height: 35px;
        }
      }
    }

    a > img{
          width:18px;
          position: relative;
          top:4px;
          filter: invert(100%);
          margin:12px 3px 0 0;
          :hover{
            filter: invert(56%) sepia(81%) saturate(2559%) hue-rotate(337deg) brightness(99%) contrast(92%);
            
          }
        }
    

    span {
        margin-bottom:20px;
        font-size:20px;
        color:#000;
        font-family: 'Teko', Arial, Helvetica, sans-serif;
      }

    

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 2fr;
    }
`
