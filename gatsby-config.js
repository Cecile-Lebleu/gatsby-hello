/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
	plugins: [
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				postCssPlugins: [
					require("tailwindcss"),
					// require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
				],
			},
		},
	],
}
