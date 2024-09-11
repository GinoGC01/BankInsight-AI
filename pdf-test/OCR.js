import Tesseract from "tesseract.js";

export async function procesarImagenOCR(imagenPath, textLang) {
  return Tesseract.recognize(imagenPath, textLang)
    .then(({ data: { text } }) => {
      // console.log(`Texto extraído de ${imagenPath}:`, text);
      return text;
    })
    .catch((error) => {
      console.error(`Error al procesar ${imagenPath}:`, error);
      return null;
    });
}
