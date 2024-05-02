import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/sumar_matrices', (req, res) => {
    try {
      const { matrix1, matrix2 } = req.body;
  
      if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        return res.status(400).send('Las matrices deben tener la misma dimensión');
      }
  
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
    } catch (error) {
      console.error('Error procesando la solicitud:', error);
      res.status(500).send('Error interno del servidor');
    }
  });

app.listen(port, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
