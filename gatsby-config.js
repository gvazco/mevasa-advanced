module.exports = {
  siteMetadata: {
    title: `Techos y Mantenimientos`,
    description: `Comercializadora de lámina y aceros, somos especialistas en techos y mantenimientos industriales y residenciales`,
    author: `@gvazco`,
    image: "./src/images/remates.jpg",
    url: `https://techosymantenimientos.com.mx`,
    siteUrl: `https://techosymantenimientos.com.mx`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: true,
        // deprecated options and their defaults:
        base64Width: 20,
        forceBase64Format: `png, jpg, webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
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
    `gatsby-plugin-sitemap`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
