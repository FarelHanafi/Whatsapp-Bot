
import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ You are already registered\n\nWant to re-register?\n\n 📌 Use this command to delete your notes\n*${usedPrefix}unreg* <serial number>`
  if (!Reg.test(text)) throw `⚠️ Format salah\n\n ✳️ Penggunaan perintah : *${usedPrefix + command} nama.umur*\n📌Contoh : *${usedPrefix + command}* ${name2}.18`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ Name cannot be empty'
  if (!age) throw '✳️ Age cannot be empty'
  if (name.length >= 30) throw '✳️ The name is too long' 
  age = parseInt(age)
  if (age > 100) throw '👴🏻 Wow Grandpa wants to play bot'
  if (age < 5) throw '🚼  There are grandparents babies'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *REGISTERED* 」─
▢ *Name:* ${name}
▢ *Age* : ${age} Tahun
▢ *Serial Number* :
${sn}
└──────────────

 *${usedPrefix}help* to see Menus
`.trim())
}
handler.help = ['reg'].map(v => v + ' <your name. your Age>')
handler.tags = ['rg']

handler.command = ['verify', 'reg', 'register', 'registrar'] 

export default handler

