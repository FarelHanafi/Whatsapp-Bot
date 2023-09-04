import moment from 'moment-timezone';

const handler = m => m;

handler.before = async function (m) {
  if (m.chat.endsWith('broadcast') || m.key.remoteJid.endsWith('broadcast')) return;
  if (m.fromMe) return;
  if (m.isGroup) return;
  // if (db.data.settings.groupOnly) return;
  let user = global.db.data.users[m.sender];
  let { banned } = db.data.users[m.chat];
  let username = conn.getName(m.sender);
  if (new Date() - user.pc < 21600000) return; // setiap 6 jam sekali
  // await conn.modifyChat(m.chat, 'mute', -Math.floor(new Date() / 1e3) * 1e3 - 1e3).catch(console.log);
  await this.reply(
    m.chat,
    `
Hi *${username.replace(/@.+/, '')} 👋*, ${ucapan()} 

${banned ? `You are *banned* 😨\ncontact: wa.me/${owner[0]}` : `I'm KIITSUNEE-MD, a WhatsApp bot that can be used to maintain groups, download, search for information, etc. To start using, use the *.menu* command. 🚀`}
`.trim(),
    m
  );
  user.pc = new Date() * 1;
};

export default handler;

function ucapan() {
  const hour_now = moment.tz('Asia/Jakarta').format('HH');
  var ucapanWaktu = 'Good morning🌄';
  if (hour_now >= '03' && hour_now <= '10') {
    ucapanWaktu = 'Good morning🌄';
  } else if (hour_now >= '10' && hour_now <= '15') {
    ucapanWaktu = 'Good afternoon🌤️';
  } else if (hour_now >= '15' && hour_now <= '17') {
    ucapanWaktu = 'Good afternoon🌇';
  } else if (hour_now >= '17' && hour_now <= '18') {
    ucapanWaktu = 'Good afternoon🌇';
  } else if (hour_now >= '18' && hour_now <= '23') {
    ucapanWaktu = 'Good night🌃';
  } else {
    ucapanWaktu = 'SGood night!🌃';
  }
  return ucapanWaktu;
}
