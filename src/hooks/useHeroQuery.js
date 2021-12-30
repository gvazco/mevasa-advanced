import { useStaticQuery, graphql } from "gatsby"

export const useHeroQuery = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      wpPage(databaseId: { eq: 1021 }) {
        id
        ACF_HomePage {
          heroText
          heroDescription
        }
      }
    }
  `)

  return data
}
