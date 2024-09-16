import { partialQueryFunc } from "./services/partialQuerysEmulator.js";
import { pdfParsePromise } from "./services/pdfParse.js";

// jsonTable(textPdf);

const rutaPDF = "./PDFs/test-02.pdf";

const procesarPDF = async () => {
  try {
    const texto = await pdfParsePromise(rutaPDF);
    return texto;
  } catch (error) {
    console.error("Error al procesar el PDF:", error);
  }
};

procesarPDF().then((value) => {
  console.log(value);
  console.log(" ");
  partialQueryFunc(value);
});
