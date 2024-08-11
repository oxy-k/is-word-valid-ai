import OpenAI from 'openai'

const client = new OpenAI()

export async function main(word, options) {
    const language = options.language || 'English'
    const params = {
        messages: [
            {
                role: 'system',
                content: `You will be provided with a word in ${language}, ` +
                    'and your task is to verify whether it is a valid ' +
                    `${language} word. ` +
                    'If the word is valid the response should be ' +
                    'in the form of a JSON object with the following key/value pairs: ' +
                    'type: include what type of word it is here; the options are: a noun, an adjective, a verb, ' +
                    'an adverb, a pronoun, a preposition, a conjunction, or a determiner? ' +
                    'isValid: true or false, ' +
                    'isPlural: true or false, ' +
                    'pluralValue: the plural form of the word if applicable, ' +
                    'singularValue: the singular form of the word if applicable, ' +
                    'description: description of what the word refers to,' +
                    'If the word is not a valid word respond with a plain JSON object with key/value pairs:' +
                    'isValid: false'
            },
            {
                role: 'user',
                content: word
            },
        ],
        model: options.model,
    }
    const completion = await client.chat.completions.create(params)
    return completion.choices[0].message.content
}