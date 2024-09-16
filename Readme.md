### Features

- **Revisar y comprender resumenes de cuentas bancarias en formato pdf**.

- **Revisión de movimientos**: Verificar y clasificar las transacciones como ingresos, egresos, impuestos, intereses, comisiones, etc.

- **Conciliación bancaria**: Comparar los movimientos bancarios con los registros contables de la empresa para asegurarse de que coincidan y corregir discrepancias.

- **Identificación de ingresos y gastos**: Clasificar cada transacción en categorías contables específicas, como ventas, compras, pagos a proveedores, nómina, etc.

- **Cálculo de impuestos**: Identificar las transacciones que generen impuestos, como IVA o retenciones, y asegurarse de que se registren correctamente para el cumplimiento tributario.

- **Análisis financiero**: Evaluar la información para analizar la liquidez, el flujo de caja y la rentabilidad de la empresa, y proporcionar recomendaciones basadas en estos datos.

- **Generación de informes contables**: Crear informes financieros como estados de resultados, balances de situación y flujos de efectivo, basados en los datos del resumen bancario.

- **Control de costos y gastos**: Identificar áreas donde los gastos pueden ser optimizados o reducidos.

- **Cumplimiento normativo**: Asegurarse de que todas las transacciones cumplen con las regulaciones fiscales y contables vigentes.

# BankInsight AI: Automatización Inteligente de Análisis Bancario


## Idea general del proyecto
La idea general del proyecto consiste principalmente en agilizar procesos dentro de un nicho específico. En este caso, un estudio contable.
### Objetivos específicos
- Automatizar la extracción de datos de resúmenes bancarios en formato PDF, incluyendo transacciones, ingresos, gastos, impuestos y otros movimientos financieros.

- Utilizar inteligencia artificial para analizar y clasificar las transacciones, diferenciando entre categorías como impuestos, comisiones, ingresos y egresos.

- Generar un archivo JSON estructurado con la información extraída, proporcionando un formato estandarizado y fácil de integrar con sistemas contables o de análisis.

- Identificar patrones financieros y posibles errores en los movimientos bancarios, ayudando en la conciliación automática de cuentas.

- Facilitar la conciliación bancaria automática, comparando los datos extraídos del banco con los registros contables internos.

- Optimizar el cálculo de impuestos y obligaciones fiscales, asegurando que los movimientos que generan impuestos se detecten y clasifiquen adecuadamente.

- Crear informes financieros automáticos, como balances, resúmenes de flujo de caja y análisis de rentabilidad, basados en los datos del resumen bancario.

- Mejorar la eficiencia en la gestión financiera, reduciendo la intervención manual y el tiempo dedicado al procesamiento de los resúmenes bancarios.

## Proceso
En este README, se encuentran dos carpetas "**pdf-test**" que trabaja con las siguientes dependencias principalmente: 
- "**pdf-poppler**"
-  "**tesseract.js**"

El funcionamiento de este, en principio, es tomar una imagen de cada página del pdf y guardarla en un directorio "output" y luego con la biblioteca "**tesseract.js**" que extrae el texto mediante la tecnologia OCR, procesarla en un input a traves de una API de inteligencia artificial previamente configurada.

En cambio, "**pdf2json**" utiliza solo la biblioteca:
- "**pdf2json**"

Esta herramienta extrae el contenido de un archivo PDF, incluyendo texto, imágenes y otros elementos, y los convierte en un formato que puede ser fácilmente manipulado y procesado por aplicaciones web.

En principio, el proyecto solo cuenta con la capacidad de convertir pdf a texto.
