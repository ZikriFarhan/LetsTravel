module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{css,js,svg}'
	],
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	swDest: 'src/sw.js'
};