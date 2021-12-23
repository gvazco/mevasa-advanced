const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

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

  //Archivo de Productos
  const archiveProyectos = path.resolve("./src/templates/archiveProyectos.js")
  const proyectos = await graphql(`
    {
      set: wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpCategoriaProyecto {
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

  //Archivo de Fichas Técnicas
  const archiveFichas = path.resolve("./src/templates/archiveFichas.js")
  const fichas = await graphql(`
    {
      setFi: wp {
        readingSettings {
          postsPerPage
        }
      }
      allWpMarca {
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

  //Archivo Productos
  const productos = await graphql(`
    query {
      allWpProducto {
        nodes {
          title
          uri
          slug
          id
          content
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 800, placeholder: TRACED_SVG)
                }
              }
            }
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

  if (fichas.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, fichas.errors)
    return
  }

  if (productos.errors) {
    reporter.panicOnBuild("Something wnt horrible wrong!", productos.errors)
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
  const { set, allWpCategoriaProyecto } = proyectos.data
  //Create Pages for each category
  allWpCategoriaProyecto.edges.forEach(categoria => {
    const postsPerPage = set.readingSettings.postsPerPage
    const numberOfPosts = categoria.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    // Some Categories may be empty and we don't want to create pages for them
    // Also don't want to create pages for uncategorized
    if (numberOfPosts > 0 || categoria.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? categoria.node.uri : `${categoria.node.uri}${i + 1}`,
          component: archiveProyectos,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: categoria.node.id,
            catName: categoria.node.name,
            catUri: categoria.node.uri,
            categoriasProyectos: allWpCategoriaProyecto,
          },
        })
      })
    }
  })

  //Category Fichas Data
  const { setFi, allWpMarca } = fichas.data
  //Create Pages for each Marcas
  allWpMarca.edges.forEach(marca => {
    const postsPerPage = setFi.readingSettings.postsPerPage
    const numberOfPosts = marca.node.count
    const numPages = Math.ceil(numberOfPosts / postsPerPage)

    // Some Categories may be empty and we don't want to create pages for them
    // Also don't want to create pages for uncategorized
    if (numberOfPosts > 0 || marca.node.name !== "uncategorized") {
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? marca.node.uri : `${marca.node.uri}${i + 1}`,
          component: archiveFichas,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
            catId: marca.node.id,
            catName: marca.node.name,
            catUri: marca.node.uri,
            marcas: allWpMarca,
          },
        })
      })
    }
  })

  //Paginate Productos
  paginate({
    createPage, // The Gatsby `createPage` function
    items: productos.data.allWpProducto.nodes, // An array of objects
    itemsPerPage: 6, // How many items you want per page
    pathPrefix: "/productos", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/productos.js`), // Just like `createPage()`
  })

  /* ----------------------------------------------------------------- */
  /*                    Crear ruta de pagina interna                   */
  /* ----------------------------------------------------------------- */

  productos.data.allWpProducto.nodes.forEach(producto => {
    createPage({
      path: `/productos/${producto.slug}`,
      component: path.resolve(`src/templates/producto/producto.js`),
      context: {
        data: producto,
      },
    })
  })
}
