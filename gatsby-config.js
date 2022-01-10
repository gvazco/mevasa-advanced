module.exports = {
  siteMetadata: {
    title: `Techos y Mantenimientos`,
    description: `Comercializadora de lámina y aceros, somos especialistas en techos y mantenimientos industriales y residenciales`,
    author: `@gvazco`,
    image: "./src/images/remates.jpg",
    url: `https://www.techosymantenimientos.com.mx`,
    siteUrl: `https://www.techosymantenimientos.com.mx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-advanced-sitemap`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://mevasa-gatsby.techosymantenimientos.com.mx/graphql`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Teko\:200,400,500,600,700`],
        display: `swap`,
      },
    },
    {
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-193132135-1",
				head: true,
			},
		},
    


    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
