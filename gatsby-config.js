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
        background_color: "#F38630",
        theme_color: "#A7DBD8",
        display: "minimal-ui",
      },
    },
    `gatsby-plugin-offline`,
  ],
};
