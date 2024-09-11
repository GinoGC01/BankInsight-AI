import Replicate from "replicate";

export const jsonTable = async (texto) => {
  const prompt = `A partir del siguiente texto, comprendelo y genera un archivo json para crear una tabla en excel con la libreria xlsx-populate. Limitate solo a retornar el archivo json. Este es el texto que debes comprender ${texto} Recuerda, solo retorna el json. No agregues "A continuación, te proporciono ..., ni Este archivo JSON contiene..."`;

  const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
  });
  const input = {
    top_k: 0,
    top_p: 0.9,
    prompt,
    max_tokens: 256,
    min_tokens: 0,
    temperature: 0.6,
    system_prompt: "Eres un contador experto, y programador js",
    length_penalty: 1,
    stop_sequences: "<|end_of_text|>,<|eot_id|>",
    prompt_template: "{prompt}",
    presence_penalty: 1.15,
    log_performance_metrics: false,
  };

  for await (const event of replicate.stream("meta/meta-llama-3-70b-instruct", {
    input,
  })) {
    process.stdout.write(event.toString());
    // const jsontable = event.json();
    // console.log(jsontable);
    // return jsontable;
  }
};
