import React from "react"
import { Wrapper } from "./SidebarMessage.styles"
import tangoMail from "../../images/tango-mail-icon.svg"

const SidebarMessage = () => (
  <Wrapper>
    <div>
      <img src={tangoMail} alt="cakeit-mail" />
      <span>Escríbenos:</span>
    </div>
    <p>
      ¿Necesitas una cotización?
      <br />
      O sólo quieres mantenerte informado de nuestras actualizaciones y
      novedades...
      <br />
      <br />
      Envíanos un correo con tu nombre:
      <br />
      <button>
        <a href="mailto:ventas@multycasetas.com">Enviár E-Mail</a>
      </button>
    </p>
  </Wrapper>
)

export default SidebarMessage
