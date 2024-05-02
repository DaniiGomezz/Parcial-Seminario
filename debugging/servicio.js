import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Endpoint para sumar matrices
app.post('/sumar_matrices', (req, res) => {
  const { matrix1, matrix2 } = req.body;

  if (matrix1.length === matrix2.length && matrix1[0].length === matrix2[0].length) {
    const rows = matrix1.length;
    const cols = matrix1[0].length;

    let resultMatrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
      resultMatrix[i] = new Array(cols);
      for (let j = 0; j < cols; j++) {
        resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }

    res.json({ result: resultMatrix });
  } else {
    res.status(400).send('Las matrices deben tener la misma dimensión');
  }
});


  app.listen(port, async()=>{
    console.log(`servidor corriendo en el puerto: http://localhost:${port}`);
    
})
