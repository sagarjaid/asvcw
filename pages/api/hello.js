// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Configuration, OpenAIApi } from "openai";

const handler = async (req, res) => {
  // const configuration = new Configuration({
  //   apiKey: process.env.OPENAI_API_KEY,
  // });

  const configuration = new Configuration({
    apiKey: "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",
  });

  const openai = new OpenAIApi(configuration);

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "how are you?" }],
  });
  console.log(completion.data.choices[0].message);

  res.status(200).json({ name: completion.data.choices[0].message });
};

export default handler;
