const { Employee: EmployeeModel } = require("../models/Employee");
const { mongoose } = require("../utils/mongoose");

const employeeController = {
    create: async (req, res) => {
        const { nome, funcao } = req.body;

        try {
            const employee = {
                nome,
                funcao
            }

            const response = await EmployeeModel.create(employee)

            res.status(201).json({ response, msg: "Funcionário cadastrado com sucesso" })
        } catch (error) {


            if (error instanceof mongoose.Error.ValidationError) {
                const errorMessages = {};

                for (const field in error.errors) {
                    if (error.errors[field].kind === "required") {
                        errorMessages[field] = error.errors[field].message;
                    }
                }

                return res.status(400).json({ error: errorMessages });
            } else {
                console.error("Erro ao cadastrar funcionário", error);
                return res.status(500).json({ error: "Erro interno do servidor" });
            }
        }

    },
    getAll: async (req, res) => {
        try {
            const users = await EmployeeModel.find();

            res.json(users);
        } catch (error) {

            return res.status(500).json({ error: "Erro interno do servidor" });

        }
    },
    get: async (req, res) => {
        const { id } = req.params;

        try {

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(404).json({ msg: "Funcionário não encontrado" });
                return;
            }

            const users = await EmployeeModel.findById(id);

            res.json(users);


        } catch (error) {

            return res.status(500).json({ error: "Erro interno do servidor" });


        }
    },
    delete: async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(404).json({ msg: "Funcionário não encontrado" });
            return;
        }

        const deleteUser = await EmployeeModel.findByIdAndDelete(id)

        res.status(200).json({ deleteUser, msg: "Funcionário excluido com sucesso" })
    },
    update: async (req, res) => {
        const { id } = req.params;
        const { nome, funcao } = req.body;

        try {
            const user = {
                nome,
                funcao
            }

            if (!mongoose.Types.ObjectId.isValid(id)) {
                res.status(404).json({ msg: "Funcionário não encontrado" });
                return;
            } else {

                await EmployeeModel.findByIdAndUpdate(id, user);

            }

            res.status(200).json({ user, msg: "Funcionário atualizado com sucesso" });



        } catch (error) {

            if (error instanceof mongoose.Error.ValidationError) {
                const errorMessages = {};

                for (const field in error.errors) {
                    if (error.errors[field].kind === "required") {
                        errorMessages[field] = error.errors[field].message;
                    }
                }

                return res.status(400).json({ error: errorMessages });
            } else {
                console.error("Erro ao cadastrar funcionário", error);
                return res.status(500).json({ error: "Erro interno do servidor" });
            }
        }
    }
}

module.exports = employeeController;