import React from "react"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles"

const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()

  const imageData = getImage(data.heroImage.localFile)

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Hero Image"></StyledImg>

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
