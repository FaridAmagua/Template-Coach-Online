const sharp = require('sharp');

async function compress() {
  await sharp('Petada.png').webp({ quality: 80 }).toFile('Petada.webp');
  await sharp('ww.jpeg').webp({ quality: 80 }).toFile('ww.webp');
  console.log("Compresión completada!");
}
compress();
