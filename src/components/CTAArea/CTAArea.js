import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"

import CTA from "../CTA/CTA"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()


  return (
    <Wrapper>
      
        {new Array(3).fill("").map((element, i) => (
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

    </Wrapper>
  )
}

export default CTAArea
