const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  /* -------------------------------------------------------------------------- */
  /*                          Side client Redirect 301                          */
  /* -------------------------------------------------------------------------- */

  /* Activar redirecciones en modo producción y commentar en  modo desarrollo  */

  const { createRedirect } = actions

  createRedirect({
    fromPath: "/portafolio/",
    toPath: "/portafolios/all-proyects/",
    statusCode: 301,
  })
  createRedirect({
    fromPath: "/blog/",
    toPath: "/blog/all-posts",
    statusCode: 301,
  })
  createRedirect({
    fromPath: "/productos/",
    toPath: "/productos/all-products",
    statusCode: 301,
  })

  /* ------------------------------------------------------------------- */
  /*                  Extraemos los datos desde Grapql                   */
  /*---------------------------------------------------------------------*/

  //Archivo de Blog
  const archiveTemplate = path.resolve("./src/templates/archive.js")
  const posts = await graphql(`
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategory {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `)

  const archivePortafolio = path.resolve("./src/templates/archivePortafolio.js")
  const proyectos = await graphql(`
    {
      set: wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategoriaPortafolio {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `)

  const archiveProductos = path.resolve("./src/templates/archiveProductos.js")
  const productos = await graphql(`
    {
      setp: wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategoriaProducto {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
    }
  `)

  //Check for errors
  if (posts.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, posts.errors)
    return
  }

  if (proyectos.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, proyectos.errors)
    return
  }

  if (productos.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, productos.errors)
    return
  }

  /* ------------------------------------------------------------------- */
  /*                      Crear paginación dinámica                      */
  /* ------------------------------------------------------------------- */

  //Categoty Posts Data
  const { wp, allWpCategory } = posts.data
  //Create Pages for each category
  allWpCategory.edges.forEach(category => {
    const postsPerPage = wp.readingSettings.postsPerPage
    const numberOfPosts = category.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    // Some Categories may be empty and we don't want to create pages for them
    // Also don't want to create pages for uncategorized
    if (numberOfPosts > 0 || category.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? category.node.uri : `${category.node.uri}${i + 1}`,
          component: archiveTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: category.node.id,
            catName: category.node.name,
            catUri: category.node.uri,
            categories: allWpCategory,
          },
        })
      })
    }
  })

  //Category Proyecs Data
  const { set, allWpCategoriaPortafolio } = proyectos.data
  //Create Pages for each category
  allWpCategoriaPortafolio.edges.forEach(categoria => {
    const postsPerPage = set.readingSettings.postsPerPage
    const numberOfPosts = categoria.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    // Some Categories may be empty and we don't want to create pages for them
    // Also don't want to create pages for uncategorized
    if (numberOfPosts > 0 || categoria.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? categoria.node.uri : `${categoria.node.uri}${i + 1}`,
          component: archivePortafolio,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: categoria.node.id,
            catName: categoria.node.name,
            catUri: categoria.node.uri,
            categoriasPortafolios: allWpCategoriaPortafolio,
          },
        })
      })
    }
  })

  //Category Products Data
  const { setp, allWpCategoriaProducto } = productos.data
  //Create Pages for each category
  allWpCategoriaProducto.edges.forEach(categoria => {
    const postsPerPage = setp.readingSettings.postsPerPage
    const numberOfPosts = categoria.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    // Some Categories may be empty and we don't want to create pages for them
    // Also don't want to create pages for uncategorized
    if (numberOfPosts > 0 || categoria.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? categoria.node.uri : `${categoria.node.uri}${i + 1}`,
          component: archiveProductos,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: categoria.node.id,
            catName: categoria.node.name,
            catUri: categoria.node.uri,
            categoriasProductos: allWpCategoriaProducto,
          },
        })
      })
    }
  })
}
