import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import Slider from "react-slick"

import CTA from "../CTA/CTA"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Wrapper data-aos="zoom-in">
      <Slider {...settings}>
        {new Array(6).fill("").map((element, i) => (
          <div>
            <CTA
              key={i + Math.random()}
              image={
                cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
                  .gatsbyImageData
              }
              link={cta.ACF_HomePage[`cta${i + 1}Link`]}
              text={cta.ACF_HomePage[`cta${i + 1}Text`]}
            />
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default CTAArea
