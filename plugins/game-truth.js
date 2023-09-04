import { create, Client } from '@open-wa/wa-automate';

const handler = async (m, { conn }) => {
  const truths = [
    "What is the most embarrassing thing that has ever happened to you?",
    "Have you ever lied to your best friend? What was it about?",
    "What is your biggest fear?",
    "What is the most adventurous thing you have done in your life?",
    "Have you ever had a crush on someone in this group?",
    "What is your most annoying habit?",
    "If you could switch lives with someone for a day, who would it be and why?",
    "Have you ever stolen something? What was it?",
    "What is the one thing you can't live without?",
    "What is your biggest regret in life?",
    "What is your secret talent?",
    "Have you ever had a crush on someone here?",
    "What is the one thing you wish you could change about yourself?",
    "Have you ever been in love? Tell us about it.",
    "What is your most awkward moment with your crush?",
"Pernah ngambil uang ortu apa ga?",
"Pernah bohong sama ortu apa aja?\nCoba ceritakan tentang kebohongannya",
"Apa makanan yang kamu sukai?",
"Siapa yang mau di jadikan pacar di gc ini?",
"Apa mimpi terburukmu?",
"Apa hal paling memalukan dari temanmu?",
"Pernah suka sama siapa aja? berapa lama?",
"Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)",
"Apa ketakutan terbesar kamu?",
"Pernah suka sama orang dan merasa orang itu suka sama kamu juga?",
"Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?",
"Pernah gak nyuri uang nyokap atau bokap? Alesanya?",
"Hal yang bikin seneng pas lu lagi sedih apa?",
"Pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?",
"Pernah jadi selingkuhan orang?",
"Hal yang paling ditakutin",
"Siapa orang yang paling berpengaruh kepada kehidupanmu",
"Hal membanggakan apa yang kamu dapatkan di tahun ini",
"Siapa orang yang bisa membuatmu sange :v",
"Sapa orang yang pernah buatmu sange",
"(bgi yg muslim) pernah ga solat seharian?",
"Siapa yang paling mendekati tipe pasangan idealmu di sini",
"Suka mabar(main bareng)sama siapa?",
"Pernah nolak orang? alasannya kenapa?",
"Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget",
"Pencapaian yang udah didapet apa aja ditahun ini?",
"Kebiasaan terburuk lo pas di sekolah apa?",
"Siapa nama mantan yang bikin lo sakit hati?"
    // ... other truths
  ];
  
  const truth = truths[Math.floor(Math.random() * truths.length)];
  conn.reply(m.chat, `${truth}`, m);
};

handler.help = ['truth'];
handler.tags = ['fun', 'game'];
handler.command = /^(truth|true)$/i;
handler.limit = false;

export default handler;
