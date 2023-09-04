import { create, Client } from '@open-wa/wa-automate';

const handler = async (m, { conn }) => {
  const words = [
    'apple', 'banana', 'cherry', 'grape', 'orange',
    'mango', 'strawberry', 'watermelon', 'pineapple', 'kiwi'
    // Add more words here
  ];

  const word = words[Math.floor(Math.random() * words.length)];
  const scrambledWord = scrambleWord(word);

  conn.reply(m.chat, `Unscramble the word: ${scrambledWord}`, m);
  try {
    const response = await conn.waitForMessage(m.chat, m.sender, 15000);

    if (!response) {
      conn.reply(m.chat, `Time's up! The correct answer is ${word}.`, m);
    } else if (response.text.trim().toLowerCase() === word) {
      conn.reply(m.chat, 'Correct! You guessed the word correctly 🎉', m);
    } else {
      conn.reply(m.chat, `Wrong answer. The correct answer is ${word}.`, m);
    }
  } catch (error) {
    if (error.message.includes('Timed Out')) {
      conn.reply(m.chat, `Time's up! The correct answer is ${word}.`, m);
    } else {
      console.error(error);
      conn.reply(m.chat, 'An error occurred while processing the game. Please try again later.', m);
    }
  }
};

function scrambleWord(word) {
  let scrambledWord = '';
  const wordArr = word.split('');

  while (wordArr.length > 0) {
    const index = Math.floor(Math.random() * wordArr.length);
    scrambledWord += wordArr.splice(index, 1);
  }

  return scrambledWord;
}

handler.help = ['guess'];
handler.tags = ['fun', 'game'];
handler.command = /^guess$/i;
handler.limit = false;

export default handler;
