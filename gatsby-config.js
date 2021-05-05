require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

console.log(`run on ${process.env.NODE_ENV} environment`);

module.exports = {
  siteMetadata: {
    title: "Swerbillionaire",
    description: "my personal blog for sharing story.",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: process.env.DATO_ACCESS_TOKEN,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (most don't need this)
        // apiUrl: 'https://site-api.datocms.com',

        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ["en"],
        },
      },
    },
  ],
};
