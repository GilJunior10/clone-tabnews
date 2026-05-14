const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deveria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'erro'", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});

test("dividir 2 / 10 deveria retornar 0.2", () => {
  const resultado = calculadora.dividir(2, 10);
  expect(resultado).toBe(0.2);
});

test("dividir 5 / 0 deveria retornar 'Cannot divide by zero'", () => {
  const resultado = calculadora.dividir(5, 0);
  expect(resultado).toBe("Cannot divide by zero");
});
