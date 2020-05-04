const Az = require('az')
const fs = require('fs')
const Text = require('./Text')

Az.Morph.init(main)

function main() {
	fs.readFile('./input.txt', {encoding: 'utf-8'}, function (err, data) {
		const text = new Text(data)
		console.log(text)
	})
}

// Az.Morph.init(word => {
// 	let tokens = Az.Tokens('Мама мыла раму. Пока не упала.').done(['SPACE', 'PUNCT'], true)
// 	tokens.forEach(el => {
// 		// console.log(el)
// 		let word = el.source.substring(el.st, el.st + el.length)
// 		// console.log(word, )
// 		// console.log(word)
//
// 		console.log(word)
// 		console.log(Az.Morph(word))
// 	})
// })

// // tokens.map(el => {
// 	Az.Morph.init(() => {
// 		console.log(Az.Morph("Утренняя"));
// 	})
// 	console.log(el.nextToken)
// 	return el
// })