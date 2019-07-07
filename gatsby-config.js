module.exports = {
  siteMetadata: {
    title: 'Tiffany White | Frontend Developer',
    author: 'Tiffany White',
    description: 'Portfolio Website',
    keywords: `Portfolio website for Tiffany White, a frontend developer based in Pennsylvania, US.`,
    github: `https://github.com/twhite96`,
    blog: 'https://tiffanywhite.dev',
    linkedin: 'https://www.linkedin.com/in/tiffanyrwhite/',
    siteUrl: `https://www.tiffanyrwhite.com`
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: 'blog'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/projects`,
        name: 'projects'
      }
    },
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tiffany White | Frontend Developer',
        short_name: 'Tiffany White Portfolio',
        start_url: '/',
        background_color: '#06d7d9',
        theme_color: '#06d7d9',
        display: 'standalone',
        icon: 'src/images/icon.png',
        orientation: 'portrait'
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XXXXXXXX-X',
        // Setting this parameter is optional (requried for some countries such as Germany)
        anonymize: true
      }
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline'
  ]
};
