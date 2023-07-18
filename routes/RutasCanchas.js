const express = require("express");
const router = express.Router();
// const canchas = require("../canchas"); // importar el modulo canchas
const canchasController = require("../controllers/canchasController");



//Rutas del GET

router.get("/canchas", canchasController.obtenerCanchas);

router.get("/canchas/:id", canchasController.obtenerCanchaPorId);

//Rutas del POST

router.post("/canchas", canchasController.addCancha);

//Rutas del PUT
router.put("/canchas/:id", canchasController.updateCancha);

//Ruta del DELETE

router.delete("/canchas/:id", canchasController.deleteCancha);




















// //Rutas GET para canchas
// router.get("/canchas", (req, res) => {
//   res.send(JSON.stringify(canchas));
// });

// router.get("/canchas/:id", (req, res) => {
//   let id = req.params.id;
//   let cancha = canchas.find((cancha) => cancha.id == id);
//   if (cancha) {
//     res.send(cancha);
//   } else {
//     res.status(404).send("Cancha no encontrada");
//   }
// });

// //post

// router.post("/canchas", (req, res) => {
//   const canchaNueva = req.body;
//   canchas.push(canchaNueva);
//   res.status(201).json("Esta cancha fue creada");
// });

// //put

// router.put("/canchas/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const cancha = canchas.find((cancha) => cancha.id === id);
//   if (cancha) {
//     cancha.nombre = req.body.nombre;
//     cancha.capacidad = req.body.capacidad;
//     cancha.direccion = req.body.direccion;
//     res.status(200).json("Cancha actualizada"); //devuelve un mensaje
//     res.json(cancha); //devuelve la cancha actualizada
//   } else {
//     res.status(404).json("Cancha no encontrada");
//   }
// });

// //delete

// router.delete("/canchas/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = canchas.findIndex((cancha) => cancha.id === id); // findIndex devuelve el indice del elemento que cumple la condicion

//   if (index !== -1) {
//     canchas.splice(index, 1);
//     res.status(200).json("Cancha eliminada");
//   } else {
//     res.status(404).json("Cancha no encontrada");
//   }
// });

module.exports = router;
