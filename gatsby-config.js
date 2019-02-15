module.exports = {
  siteMetadata: {
    title: 'Frank Richard Semakula | Portfolio',
    siteUrl: 'https://frankrs.dk/',
    description: 'Frank is a frontend developer with a wide range of skills within web development and marketing.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-eslint',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Frank Richard Semakula',
        short_name: 'F. Semakula',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'portrait',
        icon: 'src/assets/favicon-32x32.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-124489759-1',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
        globPatterns: ['**/*.{js,jsx,jpg,html,css}'],
      },
    },
  ],
  // parser: 'babel-eslint',
  // parserOptions: {
  //   ecmaVersion: 8, // optional, recommended 6+
  // },
};
