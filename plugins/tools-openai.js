import { Configuration, OpenAIApi } from "openai";
import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

import fs from 'fs'
let handler = async (m, { conn, text }) => {
if (!text) throw "Hey, can I help you??"
const configuration = new Configuration({
    apiKey: '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'
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
m.reply(response.data.choices[0].text)
    }
handler.help = ['openai']
handler.tags = ['fun']
 handler.command = /^(yus|ai|openai)$/i
export default handler
