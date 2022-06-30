var titulo = document.querySelector(".titulo")
titulo.textContent = 'Aparecida Nutricionista';

let paulo = document.querySelector("#paulo");
let tdPeso = document.querySelector(".info-peso");

const peso = tdPeso.textContent;

let tdAltura = paulo.querySelector(".info-altura");
let altura = tdAltura.textContent;

const tdImc = paulo.querySelector(".info-imc");

let pesoValido = true;
let alturaValida = true;

if(peso <= 0 || peso >= 1000) {
    console.log('peso invalido');
    pesoValido = false;
    tdImc.textContent = "Peso invalido";
} 

if (altura <= 0 || altura >= 4.00){
    console.log('altura invalida');
    alturaValida = false;
    tdAltura.textContent = "Altura invalida"
}
if (alturaValida && pesoValido){
    let imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
