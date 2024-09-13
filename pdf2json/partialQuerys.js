export async function partialQueryFunc(value) {
  const LEN = 7000;
  let texto = value;
  let newQueryText = "";
  let partialQuery = "";
  let finalQuery = "";
  let maxLenVariable = LEN;
  let maxLen = LEN;
  let firstQuery =
    'Te enviaré una serie de consultas, mientras al final diga "sigue" tu responde solo "ok", hasta que al final diga "fin"';
  let next = true;
  let lastIndex = 0; // Inicializar el último índice

  console.log("Cantidad de caracteres de la peticion normal: ", texto.length);
  console.log(firstQuery); // Primera query (hacer la llamada a la API de la IA)

  while (next) {
    if (lastIndex >= texto.length) {
      // Condición para el final del texto
      console.log("-------------------------------------");
      finalQuery = `${newQueryText.length} fin`; // Asignación correcta
      console.log(finalQuery); //(hacer la llamada a la API de la IA)
      next = false;
      console.log("Querys done");
    } else {
      for (let index = lastIndex; index < texto.length; index++) {
        let letra = texto[index];
        if (newQueryText.length < maxLenVariable) {
          newQueryText += letra; // Agregar letras a la nueva consulta
          lastIndex = index + 1;
        } else if (newQueryText.length >= maxLen) {
          partialQuery = `${newQueryText.length} sigue`; // Crear consulta parcial
          console.log("-------------------------------------");
          console.log(partialQuery); //(hacer la llamada a la API de la IA)
          newQueryText = ""; // Reiniciar la consulta para la siguiente parte
          break; // Salir del bucle para continuar
        }
      }
    }
  }
}
