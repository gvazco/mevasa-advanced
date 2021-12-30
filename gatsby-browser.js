import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import AOS from "aos"
import "aos/dist/aos.css"

const $ = require("jquery")

export const onInitialClientRender = () => {
  AOS.init()
}

