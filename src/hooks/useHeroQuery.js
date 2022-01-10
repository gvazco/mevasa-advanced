import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 1021 }) {
        id
        ACF_HomePage {
          heroImage {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1920, placeholder: TRACED_SVG)
              }
            }
          }
          heroText
          heroDescription
        }
      }
    }
  `)

  return data
}
