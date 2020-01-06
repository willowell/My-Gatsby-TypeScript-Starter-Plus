'use strict'

module.exports = {
  siteMetadata: {
    title: 'My Gatsby TypeScript Starter Plus',
    description: 'A starter kit for TypeScript-based Gatsby projects with sensible defaults.',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'William Howell',
      url: 'https://github.com/willowell',
      email: 'wlm.howell@gmail.com'
    }
  },
  pathPrefix: "/My-Gatsby-TypeScript-Starter-Plus",
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'code',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {},
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
