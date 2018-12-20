module.exports = {
  siteMetadata: {
    title: 'Radioactive Art Collective',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-131248491-1',
        head: true,
      },
    },
  ],
}
