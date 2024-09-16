//Emulación de costos y procesos de llamada a la API
export async function partialQueryFunc(value) {
  const LEN = 7000; //cantidad de caracteres de la query
  const TOKEN_LEN = 4; //promedio de caracteres por token
  let texto = value; //texto a fraccionar
  let newQueryText = "";
  let partialQuery = "";
  let finalQuery = "";
  let maxLenVariable = LEN;
  let maxLen = LEN;
  let firstQuery =
    'Te enviaré una serie de consultas, mientras al final diga "sigue" tu responde solo "ok", hasta que al final diga "fin"'; //default prompt for query
  let next = true;
  let lastIndex = 0;
  let numberLlamada = 0;
  const FIRTS_QUERY_TOKENS = firstQuery.length / TOKEN_LEN;

  const calculatorPriceForTokens = (tokens) => {
    const factor = 9.5 / 1000000;
    const price = tokens * factor;
    return price;
  };

  let finalPrice = calculatorPriceForTokens(FIRTS_QUERY_TOKENS); //precio final de la llamada

  console.log(
    "→ Cantidad de caracteres de la peticion normal: ",
    texto.length,
    "tokens: ",
    texto.length / TOKEN_LEN
  );
  console.log("-------------------------------------");

  console.log(
    FIRTS_QUERY_TOKENS,
    "tokens",
    " costo: ",
    calculatorPriceForTokens(FIRTS_QUERY_TOKENS),
    "USD"
  ); // Primera query (hacer la llamada a la API de la IA)

  while (next) {
    if (lastIndex >= texto.length) {
      // Condición para el final del texto
      console.log("-------------------------------------");
      finalQuery = `${newQueryText} fin`;
      let finalTokens = finalQuery.length / TOKEN_LEN;
      let priceFinalTokens = calculatorPriceForTokens(finalTokens);
      console.log(
        finalTokens.toFixed(1),
        "tokens",
        " costo: ",
        priceFinalTokens,
        "USD"
      ); //(hacer la llamada a la API de la IA)
      console.log("-------------------------------------");

      next = false;
      finalPrice += priceFinalTokens;
      numberLlamada += 1;

      console.log("Querys done");
    } else {
      for (let index = lastIndex; index < texto.length; index++) {
        let letra = texto[index];
        if (newQueryText.length < maxLenVariable) {
          newQueryText += letra; // Agregar letras a la nueva consulta
          lastIndex = index + 1;
        } else if (newQueryText.length >= maxLen) {
          partialQuery = `${newQueryText} sigue`; // Consulta parcial
          let tokens = partialQuery.length / TOKEN_LEN;
          let priceFinalTokens = calculatorPriceForTokens(tokens);
          finalPrice += priceFinalTokens;
          numberLlamada += 1;
          console.log("-------------------------------------");
          console.log(
            tokens.toFixed(1),
            "tokens",
            " costo: ",
            priceFinalTokens,
            "USD"
          ); //(hacer la llamada a la API de la IA)
          newQueryText = ""; // Reiniciar la consulta para la siguiente parte
          break; // Salir del bucle para continuar
        }
      }
    }
  }
  console.log("Consto final de la llamada a la API: ", finalPrice, "USD");
  console.log("Llamadas a la API: ", numberLlamada + 1);
}
