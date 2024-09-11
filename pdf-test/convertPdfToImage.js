import poppler from "pdf-poppler";
import path from "node:path";

export async function convertPDFToImage(pdfPath, outputPath) {
  let options = {
    format: "png",
    out_dir: outputPath, //save in...
    out_prefix: path.basename(pdfPath, path.extname(pdfPath)),
    page: null, // process all page
  };

  async function convertToImage(pdfPath, options) {
    try {
      await poppler.convert(pdfPath, options);
      console.log("Conversión completada");
      return { status: true };
    } catch (error) {
      console.error(error);
    }
  }

  const status = await convertToImage(pdfPath, options);
  return status;
}
