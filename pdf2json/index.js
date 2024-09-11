import { pdfParsePromise } from "./pdfParse.js";

// console.log(pdfPArse("./PDFs/BBVA 2023.pdf"));
// jsonTable(textPdf);

const rutaPDF = "./PDFs/test-2.pdf";

const procesarPDF = async () => {
  try {
    const texto = await pdfParsePromise(rutaPDF);
    console.log(texto); // input demasiado grande
  } catch (error) {
    console.error("Error al procesar el PDF:", error);
  }
};

procesarPDF();
