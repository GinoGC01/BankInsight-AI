import PDFParser from "pdf2json";

export const pdfParsePromise = (ruta) => {
  return new Promise((resolve, reject) => {
    let pdfParser = new PDFParser();

    pdfParser.on("pdfParser_dataError", (errData) =>
      reject(errData.parserError)
    );

    pdfParser.on("pdfParser_dataReady", (pdfData) => {
      const pages = pdfData.Pages;
      let extractedText = "";

      pages.forEach((page) => {
        page.Texts.forEach((textBlock) => {
          textBlock.R.forEach((text) => {
            const decodedText = decodeURIComponent(text.T); // Decodificar el texto
            extractedText += decodedText + " "; // Concatenar el texto
          });
        });
      });

      resolve(extractedText); // Devolver el texto extraído una vez que está listo
    });

    // Cargar un archivo PDF
    pdfParser.loadPDF(ruta);
  });
};
