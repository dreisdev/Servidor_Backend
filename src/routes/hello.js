const router = require("express").Router();

const helloController = require("../controllers/helloController");

router.route("/hello").get(async (req, res) => {
    try {
        const response = await helloController(req, res);
    } catch (error) {
        console.log(error);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
});

module.exports = router;