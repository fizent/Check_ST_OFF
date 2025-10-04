module.exports = {
	globDirectory: 'events-tools/',
	globPatterns: [
		'**/*.js'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};