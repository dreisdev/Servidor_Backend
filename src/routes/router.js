const router = require("express").Router();

const helloRouter = require("./hello");

router.use("/", helloRouter);

module.exports = router;

