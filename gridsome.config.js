// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Vue Couture",
  siteDescription: "Your one stop shop for finding all manner of stylish, luxury apparel and accessories",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
        route: '/posts/:slug'
      }
    }
  ],
  templates: {
    Post: '/posts/:title'
  }
}
