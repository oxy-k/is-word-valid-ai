# is-word-valid-ai
Check if a string is a valid word using AI

## Install

```shell
yarn add is-word-valid-ai
# or
npm install is-word-valid-ai
```

## Use

In order to use the package you must provide an Open AI API Key, for example

```dotenv
OPENAI_API_KEY={YOUR_API_KEY_HERE}
```

## Example usage

```javascript
import { main } from 'is-word-valid-ai' 

const response = await main('tomato', {
    key: process.env.OPENAI_MODEL,
    model: 'gpt-4o-mini',
    language: 'English'
})

console.log(response)
```

Response:
```json
{
  "type": "noun",
  "isValid": true,
  "isPlural": true,
  "pluralValue": "tomatoes",
  "singularValue": "tomato",
  "description": "A round, red or yellow fruit that is used as a vegetable in cooking."
}
```

