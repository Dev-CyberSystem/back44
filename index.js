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
const canchas = require("./canchas"); // importar el modulo canchas

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor puesto en marcha en el puerto ${PORT}`);
});

// crear una ruta en express

app.get("/", (req, res) => {
    res.send("Hola mundo desde Express");
});

app.get("/api/canchas", (req, res) => {
    res.send(JSON.stringify(canchas));
});

app.get("/api/canchas/:id", (req, res) => {
    let id = req.params.id;
    let cancha = canchas.find((cancha) => cancha.id == id);
    if (cancha) {
        res.send(cancha);
    }
    else {
        res.status(404).send("Cancha no encontrada");
    }
});

//post

app.post("/api/canchas", (req, res) => {
    let canchaNueva = {
        id: canchas.length + 1,
        nombre: req.body.nombre,
        capacidad: req.body.capacidad,
        club: req.body.club,
    };
    canchas.push(canchaNueva);
    res.send(canchas);  
});


//delete

app.delete("/api/canchas/:id", (req, res) => {
    let id = req.params.id;
    let cancha = canchas.find((cancha) => cancha.id == id);
    if (cancha) {
        canchas = canchas.filter((cancha) => cancha.id != id);
        res.send(canchas);
    }
    else {
        res.status(404).send("Cancha no encontrada");
    }
});







