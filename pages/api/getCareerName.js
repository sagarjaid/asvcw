import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  console.log(req.body, "req.body");
  console.log(req.body.text, "req.body.text");
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: req.body.text,
    temperature: 0.7,
    max_tokens: 1000,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response.data, "response.data");
  // res.status(200).json({ result: response.data.choices[0].text });
  res.status(200).json({ result: response.data });
}
