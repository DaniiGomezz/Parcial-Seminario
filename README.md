# Suma de Matrices con Node.js y Express

Este proyecto es una aplicación web que permite sumar dos matrices del mismo tamaño. Utiliza Node.js y Express para el servidor, y JavaScript para la interfaz del cliente.

## Requisitos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/), un entorno de ejecución para JavaScript.
- [npm](https://www.npmjs.com/), el gestor de paquetes para Node.js.

## Instalación

1. Clona el repositorio o descarga el código fuente y muevete a esa carpeta
   ```
   git clone https://github.com/DaniiGomezz/Parcial-Seminario.git
   cd parcial-seminario
   cd debugging
   ```


   ## ejecucion del codigo 

   1. Una vez dentro de esa carpeta ejecuta en la terminal el siguiente codigo para instalar dependencias

   "npm install"


   2. luego ejecuta el programa con el siguiente codigo 

   "npm run dev"
   
   3. deberia aparecer el siguiente mensaje.
    ´
    servidor corriendo en el puerto: http://localhost:3000
    ´
   4. listo ya podes usar el programa








   # Resumen de Soluciones: Cliente y Servidor



## Cliente

- **Validación de Dimensiones de las Matrices**:
  - Se añadió un control para asegurarse de que las dos matrices tengan las mismas dimensiones antes de enviarlas al servidor. Esto evita errores al procesar la suma.

- **Envío de Datos al Servidor**:
  - Se utilizó `fetch` para enviar datos JSON al servidor, asegurando una comunicación clara y manejable. Esto permitió controlar la solicitud y la respuesta de forma más eficiente.

- **Manejo de Respuestas y Errores**:
  - Se agregó manejo de errores para informar al usuario en caso de fallos en la comunicación con el servidor.
  - Se mostró el resultado de la suma mediante un `alert` en el navegador y también se imprimió en la consola para facilitar la depuración.

## Servidor

- **Configuración para Servir Archivos Estáticos**:
  - Se configuró el servidor para servir archivos estáticos, como `index.html`, permitiendo al cliente acceder a la aplicación web sin problemas.

- **Lógica de Suma de Matrices**:
  - El endpoint `/sumar_matrices` se corrigió para obtener las matrices del cuerpo de la solicitud (`req.body`).
  - Se añadió validación para asegurarse de que las dos matrices tengan las mismas dimensiones antes de realizar la suma. Si no tienen las dimensiones correctas, se devuelve un error 400.

- **Manejo de Errores Internos**:
  - Se implementó un bloque `try-catch` para capturar errores inesperados y devolver una respuesta apropiada. Esto garantiza que el servidor siga funcionando incluso ante errores inesperados.

Estas soluciones garantizan que el cliente y el servidor trabajen de manera cohesiva, con comunicación clara y manejo adecuado de errores. El proyecto es ahora más robusto y confiable para el usuario final.
