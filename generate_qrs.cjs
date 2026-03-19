const QRCode = require('qrcode');
const fs = require('fs');

const baseUrl = 'https://Flawtastisch.github.io/Franziska-Geburstag/#/';

const puzzles = [
  { name: '00_Start_Seite', path: '' },
  { name: '01_Rätsel_1_Keller', path: '1' },
  { name: '02_Rätsel_2_Küche', path: '2' },
  { name: '03_Rätsel_3_Bad', path: '3' },
  { name: '04_Rätsel_4_Schlafzimmer', path: '4' },
  { name: '05_Rätsel_5_Wohnzimmer', path: '5' },
  { name: '06_Rätsel_6_Büro', path: '6' },
  { name: '07_Rätsel_7_Flur', path: '7' },
  { name: '08_Rätsel_8_Torte', path: '8' },
  { name: '09_Finale_Portal', path: 'finale' }
];

if (!fs.existsSync('./qrcode-bilder')) {
  fs.mkdirSync('./qrcode-bilder');
}

async function generate() {
  console.log('Generiere QR-Codes für Franzi...');
  for (const p of puzzles) {
    const url = baseUrl + p.path;
    await QRCode.toFile(`./qrcode-bilder/${p.name}.png`, url, {
      color: {
        dark: '#0a0804', // Dark Series Schwarz 
        light: '#FFFFFF'
      },
      width: 500,
      margin: 2
    });
    console.log(`✅ Erstellt: ${p.name}.png (${url})`);
  }
  console.log('Alle QR-Codes wurden fertig generiert und im Ordner "qrcode-bilder" gespeichert!');
}

generate();
