import Carro from "./carro";
import Cliente from "./cliente";
import CompraCarro from "./compraCarro";
import Funcionario from "./funcionario";

let car = new Carro("Logan", 1999, 10000); // nome - ano - valor

let cliente = new Cliente("Jonas", 4999) // nome - salario

let funcionario = new Funcionario("Carlos") // nome do funcionario

let compra = new CompraCarro(cliente, funcionario, car);

compra.detalharCompra()