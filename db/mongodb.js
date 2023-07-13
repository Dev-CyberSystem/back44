const mongoose = require("mongoose");
const CanchaModel = require("../models/cancha.models");



// Creacion de una cancha   

const crear = async () => {
    try {
        const cancha = new CanchaModel({
            nombre: "Mario Alberto Kempes",
            capacidad: 30000,
            club: "Talleres",
            direccion: "Av. Cdad. de Valparaíso 750"
        });
        await cancha.save();
        console.log("Cancha creada");
    } catch (error) {
        console.log("Error al crear la cancha");
    }
};



// Conectar a la base de datos

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/futbol44", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
    const allCanchas = await CanchaModel.find(); //find busca todas las canchas dentro de la coleccion
    console.log(allCanchas);
    // crear()
  } catch (error) {
    console.log("Error al conectar");
  }
};

module.exports = connectDb;
