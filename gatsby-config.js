const path = require('path');

module.exports = {
    siteMetadata: {
        title: `4City`,
        siteUrl: `http://www.4city.lt`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet-async`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Roboto\:300,400,500,600,700`, `Redhat\:300,400,500,600,700`],
                display: `swap`,
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: path.resolve(__dirname, 'src/pages'),
                ignore: ['**/sections/*', '**/options/*', '**/elements/*', '**/styles/*'],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-resolve-src',
            options: {
                srcPath: path.resolve(__dirname, 'src'),
            },
        },
    ],
};
