//import db from '../lib/database.js'

let handler = async (m, { text, conn }) => {
    let user = global.db.data.users[m.sender]
    user.afk = + new Date
    user.afkReason = text
    m.reply(`
  😴 *AFK* 
Now you are afk until you message
▢ *User:* ${conn.getName(m.sender)} 
▢ *Reason:* ${text ? text : ''}
  `)
}
handler.help = ['afk <Reason>']
handler.tags = ['fun']
handler.command = ['afk']
handler.group = true

export default handler
