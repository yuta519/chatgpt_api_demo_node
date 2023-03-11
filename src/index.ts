import {Configuration, OpenAIApi} from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const openai = new OpenAIApi(new Configuration({apiKey: process.env.OPENAI_API_KEY}));

export const ask = async (content: string, model = "gpt-3.5-turbo-0301") => {
  const response = await openai.createChatCompletion({
    model: model,
    messages: [{role: "user", content: content}],
  });

  const answer = response.data.choices[0].message?.content;
  console.log(answer);
}

const question = "InnoScouterという会社を知っていますか？";
ask(question);
