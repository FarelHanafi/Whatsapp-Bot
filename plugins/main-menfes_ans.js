const delay = (_0xa65d68) => new Promise((_0x4384d6) => setTimeout(_0x4384d6, _0xa65d68));

let handler = _0x521f67 => _0x521f67;
handler['tags'] = ['menfess'];
handler['command'] = /^(menfess|menfes)$/i;
handler['private'] = true;

handler['processMessage'] = async function (_0x1e96f5) {
    const _0x1cb917 = 'menfess';

    if (!_0x1e96f5['chat']['endsWith'](_0x1cb917)) return false;

    this[_0x1cb917] = this[_0x1cb917] ? this[_0x1cb917] : {};

    let _0x393387 = Object['values'](this[_0x1cb917])['find'](_0x7751db => _0x7751db['status'] === false && _0x7751db['penerima'] == _0x1e96f5['sender']);

    if (!_0x393387) return false;

    console['log']({ 'text': _0x1e96f5['text'] });

    if ((_0x1e96f5['text'] === 'BALAS PESAN' || _0x1e96f5['text'] === '') && _0x1e96f5['quoted']['type'] == 'buttonMessage') {
        return _0x1e96f5['reply'](`Please Type Your Reply Message\x0a➠ ${_0x393387['dari']}\x0a▢ Reply message :\x0a➠ `);
    }

    let _0x263c26 = `Hai ${_0x393387['dari'].split('@')[0]} 👋\x0a\x0a┌─⊷ *THIS IS THE REPLY*\x0a▢ Your message :\x0a➠ ${_0x1e96f5['text']}\n└──────────────\x0a\n_© Kiitsunee-MD_ | *Rell*`.trim();

    return await this['reply'](_0x393387['penerima'], _0x263c26, null)['then'](() => {
        const _0x822aed = _0x1cb917;
        return _0x1e96f5['reply']('Berhasil mengirim balasan!'), delay(0x7d0), delete this[_0x822aed]['menfess'][_0x393387['id']], true;
    }), true;
};

export default handler;
