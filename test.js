'use strict'

const test = require('tape')
const find = require('./index')



test('finds Berliner Strasse', (t) => {
	t.plan(1)
	find('u berliner str').then((station) => {
		t.equal(station.id, 9044201)
	}, t.error)
})

test('finds Alt-Mariendorf', (t) => {
	t.plan(1)
	find('u alt mareindorf') // typo
	.then((station) => {
		t.equal(station.id, 9070301)
	}, t.error)
})
