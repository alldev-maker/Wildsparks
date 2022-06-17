module.exports = {
  siteMetadata: {
    title: `Wildsparks`,
    description: `Wildsparks began in 2019 with the belief that Palm and its natural health benefits can be used to create great-tasting products that nourish consumers and fit into their daily lifestyles. `,
    author: `Rory`,
    siteUrl: `https://wildsparks.netlify.app/`,
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "wildsparks",
        schemas: {
          product: require("./custom_types/product.json"),
          recipe: require("./custom_types/recipe.json"),
          vendor: require("./custom_types/vendor.json"),
          slider: require("./custom_types/slider.json"),
          categories: require("./custom_types/categories.json"),
          privacy_policy: require("./custom_types/privacy_policy.json"),
          terms: require("./custom_types/terms.json"),
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
