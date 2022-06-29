var titulo = document.querySelector(".titulo")
titulo.textContent = 'Aparecida Nutricionista';

let paulo = document.querySelector("#paulo");
let tdPeso = document.querySelector(".info-peso");

const peso = tdPeso.textContent;

let tdAltura = paulo.querySelector(".info-altura");
let altura = tdAltura.textContent;

const tdImc = paulo.querySelector(".info-imc");

let imc = peso / (altura * altura);

tdImc.textContent = imc;
