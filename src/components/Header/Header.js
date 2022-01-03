import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo_multycasetas.png"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"
import Facebook from "../../images/facebook-f-brands.svg"
import Messenger from "../../images/facebook-messenger-brands.svg"
import Instagram from "../../images/instagram-brands.svg"
import Youtube from "../../images/youtube-brands.svg"
import Whatsapp from "../../images/whatsapp-brands.svg"

const Header = () => {
  const { site, menu } = useMenuQuery()
  console.log(menu)

  return (
    <Wrapper>
      <div className="phone">
        <span>
          Seguridad, Exactitud y Garantía
          (55) 8185-3675 
          |
          (55) 8280-2149
        </span>
        <div>
          <a href="https://facebook.com/mevasacomercializadora">
            <img src={Facebook} alt="red-logo" />
          </a>
          <a href="http://m.me/mevasacomercializadora">
            <img src={Messenger} alt="red-logo" />
          </a>
          <a href="https://instagram.com/mevasacomercializadora">
            <img src={Instagram} alt="red-logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCdPy7ZYQeeu1_nQGt71y-Bg">
            <img src={Youtube} alt="red-logo" />
          </a>
          <a href="https://wa.link/szvz94">
            <img src={Whatsapp} alt="red-logo" />
          </a>
        </div>
      </div>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
