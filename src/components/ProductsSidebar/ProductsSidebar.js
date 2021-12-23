import React from "react"
import { Link } from "gatsby"
import PageIcon from "../../images/tango-page-icon.svg"
import { Wrapper, Menu } from "./ProductsSidebar.styles"

const ProductsSidebar = () => {
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-menu-header">
          <img src={PageIcon} alt="Multycasetas - Products Header" />
          <span>Productos</span>
        </li>

        <li>
          <Link
            to="/productos/casetas-de-multypanel"
            activeClassName="sidebar-highlighted"
          >
            <span>Casetas Multypanel</span>
          </Link>
        </li>
        <li>
          <Link
            to="/productos/casetas-de-lamina-pintro"
            activeClassName="sidebar-highlighted"
          >
            <span>Casetas Lámina</span>
          </Link>
        </li>
        <li>
          <Link
            to="/productos/estructuras-metalicas"
            activeClassName="sidebar-highlighted"
          >
            <span>Estructuras Metálicas</span>
          </Link>
        </li>
        <li>
          <Link
            to="/productos/techos-prefabricados"
            activeClassName="sidebar-highlighted"
          >
            <span>Techos y Cubiertas</span>
          </Link>
        </li>
        <li>
          <Link
            to="/productos/bardas-prefabricadas"
            activeClassName="sidebar-highlighted"
          >
            <span>Bardas Prefabricadas</span>
          </Link>
        </li>
        <li>
          <Link
            to="/productos/proyectos-prefabricados-especiales"
            activeClassName="sidebar-highlighted"
          >
            <span>Proyectos Especiales</span>
          </Link>
        </li>
      </Menu>
    </Wrapper>
  )
}

export default ProductsSidebar
