const router = require("express").Router();

const employeeController = require("../controllers/employeeController");

router.route("/employee").post((req, res) => employeeController.create(req, res));
router.route("/employee").get((req, res) => employeeController.getAll(req, res));
router.route("/employee/:id").get((req, res) => employeeController.get(req, res));
router.route("/employee/:id").delete((req, res) => employeeController.delete(req, res));
router.route("/employee/:id").put((req, res) => employeeController.update(req, res));

module.exports = router;