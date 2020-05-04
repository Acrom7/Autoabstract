const Az = require('az')
const fs = require('fs')
const Text = require('./Text')

Az.Morph.init(main)

function main() {
	fs.readFile('./input.txt', {encoding: 'utf-8'}, function (err, data) {
		const text = new Text(data)
		let abstract = text.abstract(50)
		fs.writeFile('output.txt', abstract, function (err) {
			if (err) throw err
			console.log('Saved!')
		})
	})
}