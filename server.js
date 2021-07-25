/* 
Descricao :
	O arquivo atualiza, adiciona e exclui dados de funcionarios, como cpf, nome, email e telefone.
Aluno :
	João Vitor Souza Santos
Data :
	25 / julho / 2021
*/


const express = require('express');
const app = express();
const data = require("./data.json");

app.use(express.json());

app.get("/employee", function (req, response) {
    response.json(data);
});
app.get("/employee/:id", function (req, response) {
    const { id } = req.params;
    const employees = data.find(emp => emp.id == id);

    if  (!employees) return response.status(204).json();

    response.json(employees);
});
app.post("/employee", function (request, response) {
    const {name, email, cpf, tel } = request.body;

    response.json({name, email, cpf, tel});
 });
app.put("/employee/:id", function (request, response) { 
    const { id } = request.params;
    const employees = data.find(emp => emp.id == id);

    if  (!employees) return response.status(204).json();

    const {name, email, cpf, tel } = request.body;

    employees.name = name;
    employees.email = email;
    employees.cpf = cpf;
    employees.tel = tel;

    response.json(employees);
});
app.delete("/employee/:id", function (req, response) {
    const { id } = req.params;
    const employeeFiltered = data.filter(employees => employees.id != id);

    response.json(employeeFiltered);
 });

app.listen(3110, function () {
    console.log("server is running");
});