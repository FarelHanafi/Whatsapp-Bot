import fs from 'fs';
import moment from 'moment-timezone';

const handler = {};

handler.all = async function (m) {
    const user = global.db.data.users[m.sender];
    const setting = db.data.settings[this.user.jid];

    if (new Date() * 1 - setting.status > 1000) {
        const _uptime = process.uptime() * 1000;
        const uptime = clockString(_uptime);
        const ultah = new Date('Januari 17, 2024 23:59:59');
        const sekarat = new Date().getTime();
        const Kurang = ultah - sekarat;
        const ohari = Math.floor(Kurang / (1000 * 60 * 60 * 24));
        const ojam = Math.floor(Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const onet = Math.floor(Kurang % (1000 * 60 * 60) / (1000 * 60));
        const detek = Math.floor(Kurang % (1000 * 60) / 1000);
        const wm = 'Kiitsunee';
        const bio = `🔵 Kiitsunee : 📆 Aktif selama ${uptime} | Mode: ${global.opts['self'] ? 'Private' : setting.self ? 'Private' : global.opts['gconly'] ? 'Hanya Grup' : 'Publik'}`;

        await this.updateProfileStatus(bio).catch(_ => _);
        setting.status = new Date() * 1;
    }
};

function clockString(ms) {
    const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
    const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
    const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}

export default handler;
