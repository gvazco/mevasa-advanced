import React from "react"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import {
  Wrapper,
  HeaderWrapper,
} from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()

  return (
    <Wrapper>
      
      <img src="https://mevasa-gatsby.techosymantenimientos.com.mx/wp-content/uploads/2021/09/ezgif.com-gif-maker.gif" style={{ width: "100%" }} />


      <HeaderWrapper>
        <div>
          <h1>{data.heroText}</h1>
          <h2>{data.heroDescription}</h2>
        </div>
      </HeaderWrapper>
    </Wrapper>
  )
}

export default Hero

