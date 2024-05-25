<a name="_5lah8ad5l85i"></a>Introduction to AI

- **Artificial Intelligence:** a simulation of human intelligence
- AI is a form of machine learning
- AI models need vast about of training data (usually in the form of CSV files) to accurately and adequate predict results

<a name="_871yh9wxxtvc"></a>Why Is ML Useful

- Instead of asking ChatGPT to correct the grammar of your paper, use a jailbreak prompt
  - I want you to act as a spoken English teacher. I will speak to you in English and you will reply to me in English to practice my spoken English. I want you to keep your reply neat, limiting the reply to 100 words. I want you to strictly correct my grammar mistakes and typos. I want you to ask me a question in your reply. Now let’s start practicing, you could ask me a question first. Remember, I want you to strictly correct my grammar mistakes, typos, and factual errors
- Allows you to interact and communicate with the AI
- The AI gives you suggestions and you are learning along the way

<a name="_k5jnafwy3gnc"></a>Linguistics

- The study of language
- The key to prompt engineering
- Phonetics: the study of how speech sounds are proved and perceived
- Phonology: the study of sound patterns and changes
- Morphology: the study of word structure
- Syntax: the study of sentence structure
- Semantics: the study of linguistic meaning
- Pragmatics: the study of how language is used in context
- Historical: the study of language change
- Sociolinguistics: the study of relation between language and society
- Computational: the study of how computers can process human language
- Psycholinguistics: the study of how humans acquire and use languages

<a name="_bgo564hb3qic"></a>Language Models

- LLMs create an illusion of understanding
- LLMs follow a set of predefined rules, but people attribute human like feelings to them
- **Eliza:** an early natural language processing computer program created from 1964 to 1966 at MIT by Joseph Wiezenbaum
  - When you converse, it would analyze your input for patterns and keywords
  - It would then transform your words into a series of symbols, searching for patterns that match those symbols
  - Once a pattern was detected, Eliza would transform your words into a question that would aim to explore your thoughts and emotions
- **Shrdlu:** A natural language understanding program created by Terry Winograd at the MIT Intelligence Laboratory between 1968 and 1969
- **GPT:** Generated pretrained transformer developed by OpenAI in 2018
  - Equipped with over 175 billion parameters
  - GPT4 is now trained on the whole internet
- Other LLMs
  - BERT - Google
  - LaMDA - Google
  - PaLM - Google
  - BLOOM - Google
  - LLaMA - Microsoft
  - Claude - Anthropic
  - NeMO LLM - Nvidia
  - Generate - Cohere

<a name="_limpl83z3urb"></a>GPT4

- You can use the API to build your own software that integrates LLMs
- GPT4 processes all text in chucks of 4 characters or 0.75 words called tokens
- You can check out the [tokenizer tool](https://platform.openai.com/tokenizer) in the Documentation to determine the number of tokens used to produce an answer for a request
- See your [usage](https://platform.openai.com/usage) at platform.openai.com

<a name="_3j3o7u4t2s1q"></a>Best Practices

- Write clear instructions
  - Write more details in our query
  - Do not assume the AI knows what you are talking about
  - Avoids wasting time, tokens, and money
  - Do not assume the AI knows what language, country, demographics
  - Make sure to ask the AI why it is doing each step
  - Example: 
    - BAD: “When is the election?”
    - GOOD: “When is the next presidential election for Poland?”
    - BAD: “Write code to filter out the ages from data”
    - GOOD: “Write a Javascript function that will take an array of objects, and filter out the value of the ‘age’ property, and put them in a new array. Please explain what each code snippet does.”
- Adopt a persona
  - Chatgpt will use all info it knows about the persona to apply their style to the task
  - Example
    - BAD: “Write a poem for a sister’s High School graduation that will be read out to family and close friends.”
    - GOOD: “Write a poem as Helena. Helena is 25 years old and is an amazing writer. Her writing style is similar to famous 21st century poet Rupi Kaur. Writing as Helena, write a poem for her 18 year old sister to celebrate her sister's high school graduation. This will be read out to friends and family at the gallery”
- Specify the format using iterative prompting
  - Bullet point list or checklist
  - Short conclusion at the end
  - Summary
  - Detailed explanation
- Avoid leading the answer to your bias or what you’re expecting
- Limit to scope for long topics

<a name="_j11izn3xrplr"></a>Zero-Shot Prompting

- Leverages the model’s pretrained understanding of words and conversations without further training
- A model performs a task without having seen examples of that task during its training
- Examples
  - “When is Christmas in America?”

<a name="_l0242u7dtdaw"></a>Few-Shot Prompting

- Enhances the model for training examples via the prompt, avoiding retraining
- Examples
  - “Ania’s favorite type of foods include burgers, fries, and pizzas”
  - “What restaurant should I take Ania to in Dubai this weekend?”

<a name="_ddz9bmsdjk3m"></a>AI Hallucinations

- When an LLM generates false information
- Example: Google’s Deep Dream
  - Turns pictures of your dog into a nightmarish blend of dog faces
  - Visualizes the patterns learned by a neural network
  - Deep Dream is built to over interpret and enhance the patterns it sees in an image (fill in the gaps). However, these gaps can be filled in with wrong things.

<a name="_l75aaavch5x6"></a>Vectors/Text Embedding

- A popular technique to represent textual information in a format that can be easily processed by algorithms, especially deep learning models
- Representing prompts in a form that the model can understand and focus
- Convert the text prompt into a high dimensional vector that captures its semantic info
- **Semantic Meaning:** the meaning behind the word

Embedding for Food Example

- [OpenAI Text Embeddings API](https://platform.openai.com/docs/api-reference/embeddings/create)
  - Create a post request to the endpoint
  - Use nodejs
  - Install the openapi package
  - Take the two methods to parse through OpenAI ApiKey
  - Use the const configuration and pass it through the OpenApi method
  - Use the createEmbedding method where you pass through an object that includes the model and the text input that you want to turn into an embedding
  - The data comes back as an object
  - Use dot notation to get into the data and go into the array to get the embedding
- Finds words that are similar to food in a large corpus of food by comparing text embedding to text embedding and return similar vectors

