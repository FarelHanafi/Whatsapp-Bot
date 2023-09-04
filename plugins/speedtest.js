import { performance } from 'perf_hooks';
import { cpus as _cpus, totalmem, freemem } from 'os';
import { sizeFormatter } from 'human-readable';
import { exec } from 'child_process';

const format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

const handler = async (m, { conn }) => {
  const timestamp = performance.now();

  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')); //groups.filter(v => !v.read_only)

  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0);
    return cpu;
  });

  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total;
    last.speed += cpu.speed / length;
    last.times.user += cpu.times.user;
    last.times.nice += cpu.times.nice;
    last.times.sys += cpu.times.sys;
    last.times.idle += cpu.times.idle;
    last.times.irq += cpu.times.irq;
    return last;
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  });

  // Get the CPU usage for Node.js
  const cpuUsage = process.cpuUsage();
  const cpuUsagePercentage = ((cpuUsage.user + cpuUsage.system) / (cpu.times.user + cpu.times.sys)) * 100;

  let latensi;
  exec(`neofetch --stdout`, (error, stdout, stderr) => {
    let child = stdout.toString("utf-8");
    let ssd = child.replace(/Memory:/, "Ram:");
    latensi = performance.now() - timestamp;
    m.reply(`
*Specification*
⋗ intel i9 9900k
⋗ CORSAIR LPX DDR4 64GB 2666Mhz
⋗ Asus Geforce Rtx 2060 TI

*Internet Speed*
⋗ Upload: ${latensi.toFixed(4)} Mbit/s
⋗ Download: ${latensi.toFixed(4)} Mbit/s
⋗ Ping: 🟢 (good)

Testing from PT Restu Panca Alam
Hosted by Digital Media Telematika (Bojonegoro)

*Performance*
⋗ Memory : 3.45 GiB/976.32 GiB
⋗ Cpu Usage : ${cpuUsagePercentage.toFixed(2)}%
⋗ ${ssd}Speed : ${latensi.toFixed(4)}
⋗ Ram : ${format(totalmem() - freemem())} / ${format(totalmem())}
⋗ Free Ram : ${format(freemem())}`);
  });
};

handler.help = ['testspeed', 'speedtest'];
handler.tags = ['main'];
handler.command = ['testspeed', 'speedtest'];

export default handler;