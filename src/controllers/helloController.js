
const helloController = async (req, res) => {

    const response = { mensagem: "Hello, Cognum!" };

    res.json(response);
}

module.exports = helloController;