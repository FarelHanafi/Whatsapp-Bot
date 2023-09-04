import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['62881026950162', 'RellZyy', true]
] // Nomor Owner

global.mods = ['6285174306183'] 
global.prems = ['6285174306183', '6285174306183', '6285174306183']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'isi_dulu'
}

// Harus di isi kalo mau ada fitur openai atau remini daftar atau login di sini : https://api.betabotz.org/
global.lann = 'ERrlH55Y'

// Sticker WM
global.nans = 'Kiitsunee'
global.packname = 'Kitsunee┃ᴮᴼᵀ' 
global.author = '@Rell' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/farelontop\n' 
global.dygp = '-'
global.fgsc = 'https://github.com/onlyrein' 
global.fgyt = 'http://farel.my.to'
global.fgpyp = 'https://saweria.co/onlyrein'
global.fglog = 'https://telegra.ph/file/b02fd5681891cfa7d83ee.jpg'
global.thumb = 'https://telegra.ph/file/b02fd5681891cfa7d83ee.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})