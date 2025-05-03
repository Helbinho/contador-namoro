// Defina aqui a data que começou o namoro
const dataInicio = new Date("2022-12-04"); // Exemplo: 1 de junho de 2022
const hoje = new Date();
const diffEmMilissegundos = hoje - dataInicio;
const dias = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));

document.getElementById("contador").innerText = `${dias} dias`;
