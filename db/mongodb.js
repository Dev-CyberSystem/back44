const mongoose = require("mongoose");

// Conectar a la base de datos

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/futbol44", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.log("Error al conectar");
  }
};

module.exports = connectDb;
