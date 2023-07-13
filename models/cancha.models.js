const mongoose = require("mongoose");
const { Schema } = mongoose;

const canchaSchema = new Schema({
  nombre: String,
  capacidad: Number,
  club: String,
  direccion: String,
}, { versionKey: false });

const CanchaModel = mongoose.model("canchas44", canchaSchema);

module.exports = CanchaModel;
