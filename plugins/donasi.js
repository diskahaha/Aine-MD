let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0812-8557-8808]
│ •  [0812-8557-8808]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
