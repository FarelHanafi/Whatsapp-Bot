let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `▢ Current Total Features : ${totalf}`,m)
}

handler.help = ['totalfeature']
handler.tags = ['info']
handler.command = ['totalfeature']
handler.register = false
handler.limit = false
export default handler