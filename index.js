const Az = require('az')
const fs = require('fs')
const Text = require('./Text')

Az.Morph.init(main)

function main() {
	const percent = parseInt(process.argv[2], 10) || 30
	const inputFile = process.argv[3] || './input.txt'
	const outputFile = process.argv[4] || './output.txt'

	fs.readFile(inputFile, {encoding: 'utf-8'}, function (err, data) {
		if (err) throw err
		const text = new Text(data)
		let abstract = text.abstract(percent)
		fs.writeFile(outputFile, abstract, function (err) {
			if (err) throw err
			console.log('Done!')
		})
	})
}