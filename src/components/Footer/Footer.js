import React from "react"
import { Link } from "gatsby"
//SVG Images
import Facebook from "../../images/facebook-square-brands.svg"
import Instagram from "../../images/instagram-square-brands.svg"
import Twitter from "../../images/twitter-square-brands.svg"
import Linkedin from "../../images/linkedin-brands.svg"
import Youtube from "../../images/youtube-square-brands.svg"
//Styles
import { Wrapper, Credits, StyledH2 } from "./Footer.styles"

const Footer = () => (
  <>
    <Wrapper>
      <ul className="listing">
        <li className="menu">
          <StyledH2>Menu:</StyledH2>
          <p>
            <Link to="/">Inicio</Link>
          </p>
          <p>
            <Link to="/productos">Productos</Link>
          </p>
          <p>
            <Link to="/galeria/all-proyects/">Galería</Link>
          </p>
          <p>
            <Link to="/fichas_tecnicas/all-fichas/">Fichas</Link>
          </p>
          <p>
            <Link to="/blog/all-posts/">Blog</Link>
          </p>
          <p>
            <Link to="/contacto">Contacto</Link>
          </p>
        </li>
        <p>
          <StyledH2>Encuéntranos en:</StyledH2>
          <span>Dirección: </span>
          <p>
            Hipodromo No. 11 Col. San Miguel Xochimanga, C.P. 52927 - Atizapán
            de Zaragoza, EdoMéx.
          </p>
          <span>Teléfonos: </span>
          <p>55.5887.3716 // 55.5887.3717</p>
          <span>Email: </span>
          <p>ventas@multycasetas.com</p>
          <span>Horario: </span>
          <p>
            Lunes - Viernes: 08.00-18.00 <br /> Sábado: 09.00-12.00
          </p>
        </p>
        <li className="redes">
          <StyledH2>Siguenos en Redes:</StyledH2>
          <p>
            <a href="https://twitter.com/MultyCasetas">
              <img src={Twitter} alt="white-logo" /> Twitter
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/MultyCasetasLaminas">
              <img src={Facebook} alt="white-logo" /> Facebook
            </a>
          </p>
          <p>
            <a href="https://instagram.com/multycasetas">
              <img src={Instagram} alt="white-logo" /> Instagram
            </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/company/multycasetas">
              <img src={Linkedin} alt="white-logo" /> Linkedin
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/user/CasetasPrefabricadas">
              <img src={Youtube} alt="white-logo" /> Youtube
            </a>
          </p>
        </li>
      </ul>
    </Wrapper>
    <Credits>
      2022 © Multycasetas y Láminas | Todos los derechos reservados. Sitio
      Creado por:{" "}
      <a href="https://disturbioilustrativo.com">Disturbio Ilustrativo</a>
    </Credits>
  </>
)

export default Footer
