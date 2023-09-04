import { create, Client } from '@open-wa/wa-automate';

const handler = async (m, { conn }) => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let answer;
  let question = '';

  switch (operator) {
    case '+':
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case '-':
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case '*':
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    case '/':
      question = `${num1 * num2} / ${num2}`;
      answer = num1;
      break;
    default:
      break;
  }

  conn.reply(m.chat, `Solve this math problem: ${question}`, m);
  try {
    const response = await conn.waitForMessage(m.chat, m.sender, 15000);

    if (!response) {
      conn.reply(m.chat, `Time's up! The correct answer is ${answer}.`, m);
    } else if (response.text.trim() === answer.toString()) {
      conn.reply(m.chat, 'Correct! You are a math genius 🎉', m);
    } else {
      conn.reply(m.chat, `Wrong answer. The correct answer is ${answer}.`, m);
    }
  } catch (error) {
    if (error.message.includes('Timed Out')) {
      conn.reply(m.chat, `Time's up! The correct answer is ${answer}.`, m);
    } else {
      console.error(error);
      conn.reply(m.chat, 'An error occurred while processing the math game. Please try again later.', m);
    }
  }
};

handler.help = ['math'];
handler.tags = ['fun', 'game'];
handler.command = /^math$/i;
handler.limit = false;

export default handler;
