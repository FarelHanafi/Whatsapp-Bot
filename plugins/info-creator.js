function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:RellZyy\nitem1.TEL;waid=62881026950162:62881026950162\nitem1.X-ABLabel:\nJangan Spam Kak\nURL;My Web:http://farel.my.to\nEMAIL;Email Owner:farelcuy122@gmail.com\nORG: NOT A BOT + NOT CALL\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler