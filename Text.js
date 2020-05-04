const Sentence = require('./Sentence')
const {Counter} = require('pycollections')
const natural = require('natural')

module.exports = class Text {
	constructor(text) {
		this.raw = text
		const tokenizer = new natural.SentenceTokenizer()
		this.sentences = tokenizer.tokenize(text).map(s => new Sentence(s))
		let sentArr = this.sentences.map(el => el.sentence)
		let wordArr = sentArr.map(el => el.map(e => e.word)).flat()
		this.countOfWord = wordArr.length
		this.wordCount = new Counter()
		this.wordCount.update(wordArr)
	}

	abstract(percent) {
		if (percent > 100 || percent < 1) {
			console.error('Percent must be between 1 and 100 (include)')
			process.exit(1)
		}
		let weight = []
		for (const sentence of this.sentences) {
			weight.push([sentence, sentence.getWeight(this)])
		}
		weight.sort((a, b) => b[1] - a[1])
		const countOfSentences = Math.floor(this.sentences.length * percent / 100)
		const minWeight = weight[countOfSentences - 1][1]
		let result = ""
		for (const sentence of this.sentences) {
			if (sentence.getWeight(this) >= minWeight) {
				result += sentence.raw + " "
			}
		}
		return result.trimEnd()
	}
}