import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `wa'alaikumussalam wa rahmatullahi wa barakatuh`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m)
}
handler.customPrefix = /^(assalamualaikum|assalammualaikum|Salam)$/i
handler.command = new RegExp

export default handler