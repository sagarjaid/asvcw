import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req,
  res
) {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: req.body.text,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 256,
  });
  console.log(completion.data);
  res.status(200).json({ result: completion.data.choices[0].text});
}
