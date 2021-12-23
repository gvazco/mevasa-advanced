import styled from "styled-components"

export const HamburgerButton = styled.div`
  img {
    position: fixed;
    display: block;
    z-index: 100000;
    right: 30px;
    top: 55px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 0.2s ease;
    filter: invert(56%) sepia(81%) saturate(2559%) hue-rotate(337deg)
      brightness(99%) contrast(92%);

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
`
