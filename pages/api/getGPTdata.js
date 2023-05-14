import { Configuration, OpenAIApi } from 'openai';
import GenratePrompt from '@/components/GenratePrompt';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (!req.body.prompt || !req.body.slug) {
    throw new Error('Missing required field: text');
  }

  let prompt = req.body.prompt;
  let slug = req.body.slug;

  const userPrompt = GenratePrompt(prompt, slug);

  if (!userPrompt) {
    throw new Error('Someting went wrong please try again after sometime');
  }

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: userPrompt,
      temperature: 0.7,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    if (
      !response ||
      !response.data ||
      !response.data.choices ||
      !response.data.choices[0]
    ) {
      throw new Error('Invalid response from OpenAI API');
    }

    res.status(200).json({ result: response.data.choices[0].text });
    // res.status(200).json({ result: userPrompt });
  } catch (error) {
    console.error(error);
    res.status(500).json({ result: error.message });
  }
}
