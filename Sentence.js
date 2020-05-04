const Az = require('az')
const Word = require('./Word')
const natural = require('natural')

module.exports = class Sentence {
	constructor(sentence) {
		this.raw = sentence
		const tokenizer = new natural.WordTokenizer()
		let arr = tokenizer.tokenize(sentence).map(word => new Word(word))
		this.sentence = arr
		/*		this.sentence = sentence.split(' ').map(el => {
					let token = Az.Tokens(el).done(['SPACE', 'PUNCT'], true)[0]
					let word = token.source.substring(token.st, token.st + token.length)
					return new Word(word)
				})*/
	}

	getWeight(text) {
		let result = 0
		for (const word of this.sentence) {
			result += word.getWeight(text)
		}
		return result
	}
}