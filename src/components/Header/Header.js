import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import Logo from "../../images/logo_multycasetas.png"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"
import Facebook from "../../images/facebook-square-brands.svg"
import Instagram from "../../images/instagram-square-brands.svg"
import Youtube from "../../images/youtube-square-brands.svg"

const Header = () => {
  const { site, menu } = useMenuQuery()
  console.log(menu)

  return (
    <Wrapper>
      <div className="phone">
        <span>
          Seguridad, Exactitud y Garantía (55) 8185-3675 (55) 8280-2149
        </span>
        <div>
          <a href="https://facebook.com/mevasacomercializadora">
            <img src={Facebook} alt="white-logo" />
          </a>
          <a href="https://instagram.com/mevasacomercializadora">
            <img src={Instagram} alt="white-logo" />
          </a>
          <a href="https://facebook.com/MevasaComercializadora">
            <img src={Youtube} alt="white-logo" />
          </a>
          <a href="https://facebook.com/MevasaComercializadora">
            <img src={Facebook} alt="white-logo" />
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
