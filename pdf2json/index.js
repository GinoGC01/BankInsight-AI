import { partialQueryFunc } from "./partialQuerys.js";
import { pdfParsePromise } from "./pdfParse.js";

// console.log(pdfPArse("./PDFs/BBVA 2023.pdf"));
// jsonTable(textPdf);

const rutaPDF = "./PDFs/test-2.pdf";

const procesarPDF = async () => {
  try {
    const texto = await pdfParsePromise(rutaPDF);
    return texto;
  } catch (error) {
    console.error("Error al procesar el PDF:", error);
  }
};

procesarPDF().then((value) => {
  partialQueryFunc(value);
});
