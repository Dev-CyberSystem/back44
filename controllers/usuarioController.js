const Usuarios = require("../models/usuarios.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const register = async (req, res) => {
  try {
    const { nombre, apellido, email, password, rol } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const usuario = new Usuarios({
      nombre,
      apellido,
      email,
      password: hash,
      rol,
    });
    await usuario.save();
    res.status(201).json("Usuario creado");
  } catch (error) {
    res.status(400).json(error, "usuario no Creado");
  }
};

const loginUsuario = async (req, res) => {
    const user = await Usuarios.findOne({ email: req.body.email });

    if (!user) {
        return res.status(400).json("Usuario y/o Password incorrecto");
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
        return res.status(400).json("Usuario y/o Password incorrecto");
    }

    // generar el token

    const token = jwt.sign({
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        rol: user.rol
    },
        process.env.SECRET_KEY,
        {expiresIn: "1d"}
    );

    res.header("auth-token", token).json({
        error: null,
        data: { token }
    });
};


module.exports = {
    register,
    loginUsuario
}
