import { useStaticQuery, graphql } from "gatsby"
export const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            title
            excerpt
            slug
            uri
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
    }
  `)

  return data
}
