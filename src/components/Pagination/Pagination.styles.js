import styled from "styled-components"

export const StyledH2 = styled.h2`
  margin:30px 0;
 
`
export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  .navBack {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
    position: relative;
    width: 120px;
    height: 30px;
    display: block;
    background: #000;
    padding: 3px 10px 0 25px;
    margin-bottom: 30px;

    :hover {
      background: #f26e3b;
    }
  }

  .navForward {
    font-family: "Teko", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 800;
    color: #fff;
    position: relative;
    width: 120px;
    height: 30px;
    display: block;
    background: #000;
    padding: 3px 10px 0 5px;
    margin-bottom: 30px;
    text-align: center;

    :hover {
      background: #f26e3b;
    }
  }
`
