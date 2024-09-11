// openaiModule.mjs
import { Configuration, OpenAIApi } from "openai";
import axios from "axios";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Usa una variable de entorno para la API Key
});

const openai = new OpenAIApi(configuration);

// Función para procesar la imagen y extraer texto
export async function extractTextFromImage(imageUrl) {
  try {
    const response = await openai.createImageCompletion({
      model: "text-davinci-003", // Cambiar a un modelo con capacidad de visión cuando esté disponible
      prompt: `Extrae la información relevante de este resumen bancario en un formato estructurado: ${imageUrl}`,
      temperature: 0,
      max_tokens: 1000,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error("Error extrayendo texto de imagen:", error);
    throw error;
  }
}
