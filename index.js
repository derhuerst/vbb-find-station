'use strict'

const search = require('vbb-find-stations')

const find = (query) => new Promise((yay, nay) => {
	let relevance = -Infinity
	let station   = null
	search(query, search.fuzzy).on('error', nay)
	.on('data', (s) => {
		if (s.relevance > relevance) {
			station = s
			relevance = s.relevance
		}
	})
	.on('end', () => yay(station))
})

module.exports = find
