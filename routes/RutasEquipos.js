const equipos = require("../equipos");
const express = require("express");
const router = express.Router();

//Rutas GET para equipos
router.get("/equipos", (req, res) => {
    res.send(equipos);
}
);

module.exports = router;