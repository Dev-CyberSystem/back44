// Modulos en Node ---> importar y exportar
// importacion de un modulo
// const { equipos, canchas } = require("./equipos");

// equipos.forEach((equipo) => {
//   console.log(`${equipo} es un equipo de futbol`);
// });

// canchas.forEach((cancha) => {
//   console.log(`${cancha} es una cancha de futbol completa.`);
// });

// Servidor con Node http
// Verbos mas utilizados en http
// GET ---> obtener informacion
// POST ---> enviar informacion
// PUT ---> actualizar informacion
// DELETE ---> eliminar informacion

// Instalar el paquete http
// npm install http

// const http = require("http");

//crear servidor. Recibe un callback con dos parametros

// const servidor = http.createServer((req, res) => { //req ---> request, res ---> response
//     res.end("Hola mundo desde Node v2"); // localhost:3000
//     // console.log(req.url);
//     // console.log(req.method);
//     // console.log(req.headers);
//     // console.log(req.body);
//     // console.log(req.statusCode);
//     console.log(res)
// });

//poner a escuchar el servidor

// const PORT = 3000;

// servidor.listen(PORT, () => {
//     console.log(`Servidor puesto en marchaaaaaa en el puerto ${PORT}`);
// });

// Nodemon
// npm install nodemon -D

// instalar Express
// npm install express

const express = require("express"); // importar express
const app = express(); // inicializar express
const connectDb = require("./db/mongodb"); // importar la conexion a la base de datos
const cors = require("cors");
const comprobacionJwt = require("./middleware/comprobacionJwt");

app.use(express.json()); //permite recibir obj en formato json
app.use(express.urlencoded({ extended: true })); //permite recibir parametros y queris en las rutas
app.use(cors());
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const initApp = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Servidor puesto en marcha en el puerto ${PORT}`);
    });
    await connectDb();
  } catch (error) {
    console.log("Error al iniciar la aplicacion");
  }
};

initApp();

// crear una ruta en express

app.use("/api", require("./routes/RutasCanchas"));
app.use("/api/user", require("./routes/RutasUsuarios"));
app.use("/protegida", comprobacionJwt, require("./routes/RutaAdmin"));
