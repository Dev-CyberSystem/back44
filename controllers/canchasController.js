const CanchaModel = require("../models/cancha.models");

//GET
const obtenerCanchas = async (req, res) => {
  try {
    const canchas = await CanchaModel.find();
    res.json(canchas);
  } catch (error) {
    res.status(400).json("Canchas no encontradas");
  }
};

const obtenerCanchaPorId = async (req, res) => {
  try {
    const id = req.params.id;
    const cancha = await CanchaModel.findById(id);
    if (cancha) {
      res.json(cancha);
    } else {
      res.status(404).json("Cancha no encontrada");
    }
  } catch (error) {
    res.status(400).json("Canchas no encontradas");
  }
};

// Creacion de una cancha
const addCancha = async (req, res) => {
  try {
    const cancha = new CanchaModel(req.body);
    await cancha.save();
    res.status(201).json(cancha);
  } catch (error) {
    res.status(400).json("Canchas no Creada");
  }
};

//Actualizar una cancha

const updateCancha = async (req, res) => {
  try {
    const id = req.params.id;
    const cancha = await CanchaModel.findById(id);
    if (cancha) {
      cancha.nombre = req.body.nombre;
      cancha.capacidad = req.body.capacidad;
      cancha.club = req.body.club;
      cancha.direccion = req.body.direccion;
      const canchaActualizada = await cancha.save();
      res.status(200).json("Cancha actualizada");
      res.json(canchaActualizada);
    } else {
      res.status(404).json("Cancha no encontrada");
    }
  } catch (error) {
    res.status(400).json("Canchas no actualizada");
  }
};

//Borrar una cancha

const deleteCancha = async (req, res) => {
  try {
    const id = req.params.id;
    const cancha = await CanchaModel.findById(id);
    if (cancha) {
      await CanchaModel.deleteOne({ _id: id });
      res.status(200).json("Cancha eliminada");
    } else {
      res.status(404).json("Cancha no encontrada");
    }
  } catch (error) {
    res.status(400).json("Cancha no eliminada");
  }
};

module.exports = {
  obtenerCanchas,
  obtenerCanchaPorId,
  addCancha,
  updateCancha,
  deleteCancha
};
