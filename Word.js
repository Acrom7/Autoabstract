const Az = require('az')

module.exports = class Word {
	constructor(word) {
		this.raw = word
		this.word = Az.Morph(this.raw)[0].normalize().word
		// TODO Чтобы точки и т.д. не передовались сюда
		console.log(this.word)
	}

	getWeight(text) {

	}
}