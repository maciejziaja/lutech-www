module.exports = {
  siteMetadata: {
    title: `Lu-Tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-react-next',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.lu-tech.pl`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-21681130-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Lu-Tech",
        short_name: "Lu-Tech",
        start_url: "/",
        background_color: "#E0E4CC",
        theme_color: "#E0E4CC",
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-offline`,
  ],
};
