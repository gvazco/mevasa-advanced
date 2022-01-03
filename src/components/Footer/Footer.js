import React from "react"
import { Link } from "gatsby"

//Styles
import { Wrapper, Credits, StyledH2 } from "./Footer.styles"

const Footer = () => (
  <>
    <Wrapper>
      <div className="content-wrapper">
        <ul className="listing">
          <li className="menu">
            <StyledH2>
              <Link to="/">Inicio</Link>
            </StyledH2>
            <p>      
            </p>
            <p>
              <Link to="/productos/all-products/">Productos</Link>
            </p>
            <p>
              <Link to="/galeria/all-proyects/">Portafolios</Link>
            </p>
            <p>
              <Link to="/fichas_tecnicas/all-fichas/">Documentación</Link>
            </p>
            <p>
              <a href="https://wa.link/szvz94">Contacto</a>
            </p>
          </li>
          <li className="servicios">
            <StyledH2>
              <Link to="/">Servicios</Link>
            </StyledH2>
            <p>
              <Link to="/">Corte y Doblez de Lámina</Link>
            </p>
            <p>
              <Link to="/">Suministro de Materiales</Link>
            </p>
            <p>
              <Link to="/">Instalación Especializada</Link>
            </p>
          </li>
          <li className="redes">
            <StyledH2>Encuentranos en:</StyledH2>
            <p>
              (55) 8185-3675
            </p>
            <p>
              (55) 8280-2149
            </p>
            <p>
              info.mevasa@gmail.com
            </p>
            <p>
              ventas@techosymantenimientos.com.mx
            </p>
            <span>Dirección Físcal:</span>
            <p>
              Ricardo Flores Magón #105, Izcalli Chamapa, 53689, Naucalpan de Juárez, EdoMéx.
            </p>
          </li>
        </ul>
      </div>
    </Wrapper>
    <Credits>
      2022 © Tehchos y Mantenimientos | Mevasa Comercializadora | Todos los derechos reservados. Sitio
      Creado por:{" "}
      <a href="https://disturbioilustrativo.com">Disturbio Ilustrativo</a>
    </Credits>
  </>
)

export default Footer
