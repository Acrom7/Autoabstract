const Az = require('az')
const Word = require('./Word')

module.exports = class Sentence {
	constructor(sentence) {
		this.raw = sentence
		this.sentence = sentence.split(' ').map(el => new Word(el))
	}
}