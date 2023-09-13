const mongoose = require("mongoose");

const { Schema } = mongoose;

const employeeSchema = new Schema({
    nome: {
        type: String,
        required: [true, "Nome do funcionário é obrigatório"]
    },
    funcao: {
        type: String,
        required: [true, "Informar a função  é obrigatório"]
    },

},
    { timestamps: true },

);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {
    Employee,
    employeeSchema,
}