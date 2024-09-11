import path from "node:path";
import fs from "node:fs";
import { procesarImagenOCR } from "./OCR.js";
import { convertPDFToImage } from "./convertPdfToImage.js";

const pdfPath = path.resolve("./PDFs/test-2.pdf");
const outputPath = path.resolve("./output");
const textLang = "eng";

async function main() {
  const carpetaImages = await convertPDFToImage(pdfPath, outputPath);

  if (carpetaImages.status) {
    // Función para recorrer la carpeta y procesar todas las imágenes
    function procesarCarpetaImagenes(carpetaPath) {
      return new Promise((resolve, reject) => {
        // Leer los archivos de la carpeta
        fs.readdir(carpetaPath, (err, archivos) => {
          if (err) {
            return reject(err);
          }

          // Filtrar solo archivos de imagen (puedes ajustar los tipos según lo que tengas)
          const imagenes = archivos.filter((archivo) => {
            const ext = path.extname(archivo).toLowerCase();
            return ext === ".png" || ext === ".jpg" || ext === ".jpeg";
          });

          // Procesar todas las imágenes con OCR
          const promesasOCR = imagenes.map((imagen) => {
            const imagenPath = path.join(carpetaPath, imagen);
            return procesarImagenOCR(imagenPath, textLang);
          });

          // Esperar a que todas las promesas se resuelvan
          Promise.all(promesasOCR)
            .then((textos) => {
              resolve(textos);
            })
            .catch((error) => {
              reject(error);
            });
        });
      });
    }

    // Ruta a la carpeta con las imágenes
    const carpetaImagenes = "./output";

    // Ejecutar el procesamiento de la carpeta
    procesarCarpetaImagenes(carpetaImagenes)
      .then((textosExtraidos) => {
        console.log(textosExtraidos);
      })
      .catch((error) => {
        console.error("Error procesando las imágenes:", error);
      });
  } else {
    console.log("carpeta vacía");
  }
}

main();
