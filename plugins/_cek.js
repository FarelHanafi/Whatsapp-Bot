let handler = async ( m ) => {
  m.reply('Active! And can be used as before')
}

handler.command = /^(cek|tes|a|p)$/i

export default handler