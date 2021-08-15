const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Abdul | Fullstack & Front-end Developer`,
    description: `I’m Abdul, a self-taught Front-end developer, from Nigeria.`,
    author: `Abdul`,
    siteUrl: 'https://Abdul.dev',
    social: {
      twitter: 'abduldev',
      instagram: 'abduldev',
      linkedin: 'abduldev',
      youtube: 'abduldev',
      facebook: 'abduldev',
      github: 'abduldev',
      email: 'hello@bdul.dev'
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.jpg`
  },
  plugins: [
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
