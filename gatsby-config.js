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
  ],
}
