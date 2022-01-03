import styled from "styled-components"

export const Wrapper = styled.header`
  background-color: white;
  height: 130px;
  box-shadow: 7px 7px 16px #d1d1d1, -7px -7px 16px #fff;
  border-bottom: 1px solid #e7e7e7;
  position: fixed;
  width: 100%;
  z-index: 10000;

  .phone {
    text-align: center;
    font-family: "Teko", Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    color: #212121;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 2px;
    padding: 10px 20px 0 20px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items:center;

    span{
        display: none;
        margin: 0 0 0 5px;
        
      }
    

    a:hover {
      color: #ff6600;
      cursor: pointer;
    }

    img{
      height:20px;
      margin:0 8px;
    }

    @media screen and (min-width: 768px) {
      justify-content: space-between;
      span{
        display: block;
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;

  img {
    width: 150px;
    margin: 0;
    padding-bottom: 10px;
  }
`
