const sharp = require('sharp');

async function compress() {
  await sharp('Imagen principal.png').webp({ quality: 80 }).toFile('Imagen_principal.webp');
  await sharp('Cris ayudando.png').webp({ quality: 80 }).toFile('Cris_ayudando.webp');
  await sharp('entrenado.png').webp({ quality: 80 }).toFile('entrenado.webp');
  console.log("Compresión completada!");
}
compress();
