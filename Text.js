const Az = require('az')
const Sentence = require('./Sentence')

module.exports = class Text {
	constructor(text) {
		this.raw = text
		this.sentences = text.split('.').map(s => new Sentence(s))
	}
}