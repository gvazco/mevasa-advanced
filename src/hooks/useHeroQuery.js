import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 12 }) {
        id
        ACF_HomePage {
          herofrontimage {
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 680, placeholder: TRACED_SVG)
              }
            }
          }
          herotextimage {
            localFile {
              publicURL
              childImageSharp {
                gatsbyImageData(width: 600, placeholder: TRACED_SVG)
              }
            }
          }
          heroText
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `)

  return data
}
