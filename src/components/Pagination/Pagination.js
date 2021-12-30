import React from "react"
import { Link } from "gatsby"
import { Wrapper, StyledH2 } from "./Pagination.styles"

const Pagination = ({ catUri, page, totalPages }) => (
  <>
    <StyledH2>
      Navegación - Página {page} / {totalPages}
    </StyledH2>
    <Wrapper isFirst={page === 1}>
      {page > 1 ? (
        <Link to={`${catUri}${page === 2 ? "" : page - 1}`} className="navBack">
          Anterior
        </Link>
      ) : null}

      {page < totalPages ? (
        <Link to={`${catUri}${page + 1}`} className="navForward">
          Siguiente
        </Link>
      ) : null}
    </Wrapper>
  </>
)

export default Pagination
