const Az = require('az')
const stopwords = require('stopwords-ru')

module.exports = class Word {
	constructor(word) {
		this.raw = word
		let tokens = Az.Tokens(this.raw)
		this.word = Az.Morph(this.raw)[0].normalize().word
	}

	getWeight(text) {
		let result
		if (stopwords.includes(this.word)) {
			result = 0
		} else {
			result = text.wordCount.get(this.word) / text.countOfWord
		}
		return result
	}
}