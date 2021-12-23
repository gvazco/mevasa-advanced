import { useStaticQuery, graphql } from "gatsby"

export const useQuoteQuery = () => {
  const data = useStaticQuery(graphql`
    query QuoteQuery {
      wpPage(databaseId: { eq: 12 }) {
        ACF_HomePage {
          citat1Author
          citat1Text
        }
      }
    }
  `)

  return data
}
