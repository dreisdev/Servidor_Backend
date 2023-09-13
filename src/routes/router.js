const router = require("express").Router();

const helloRouter = require("./hello");
const employeeRouter = require("./employee");


router.use("/", helloRouter);
router.use("/", employeeRouter);

module.exports = router;

