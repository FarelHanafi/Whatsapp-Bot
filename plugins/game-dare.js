import { create, Client } from '@open-wa/wa-automate';

const handler = async (m, { conn }) => {
  const dares = [
    "Take a picture of a grave at midnight. Are you brave enough?",
    "Take a picture of the bot and make it your profile picture for 1 day.",
    "Sing Balonku ada 5 in a voice note.",
    "Drink Coca-Cola until its finished without burping for 30 seconds.",
    "Eat a chili pepper without drinking or eating anything else for 2 minutes.",
    "Dip your phone in water for 30 seconds.",
    "In a voice note, say I love you.",
    "Sing 'Potong Bebek Angsa in a voice note.",
    "Send a message to your ex and say I still like you.",
    "Call your crush/partner now and take a screenshot to show the players.",
    "Slap one of the group members.",
    "Say what's in front of you.",
    "Take a screenshot of your recent WhatsApp call.",
    "Send a voice note asking 'Can I call you baby?'",
    "Use Sule's photo as your profile picture for 3 days.",
    "Type using a local language for 24 hours.",
    "Change your name to _gue anak lucinta luna_ for 5 hours.",
    "Chat with contacts in the order of your battery percentage and tell them Im lucky to have you'.",
    "Prank chat your ex and say I love you, want to get back together?'",
    "Record a voice reading Surah Al-Kautsar.",
    "Change your name to '*BOWO*' for 24 hours.",
    "Mention the type of your partner!",
    "In a voice note, say 'I love you'.",
    "You have to slap now!",
    "You have to share your limits, at least 2 for each user.",
    "Chat for 1 hour using 4l4Y 8AN93T.",
  ];
  
  const dare = dares[Math.floor(Math.random() * dares.length)];
  conn.reply(m.chat, `${dare}`, m);
};

handler.help = ['dare'];
handler.tags = ['fun', 'game'];
handler.command = /^(dare|brave|challenge)$/i;
handler.limit = false;

export default handler;
