const titulo = document.querySelector(".titulo")

let pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {

    let paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector(".info-imc");

    let pesoValido = true;
    let alturaValida = true;

        
    if(peso <= 0 || peso >= 1000) {
        console.log("peso invalido");
        pesoValido = false;
        tdImc.textContent = "Peso invalido";
        paciente.classList.add("paciente-invalido");
    } 

    if (altura <= 0 || altura >= 4.00){
        console.log("altura invalida");
        alturaValida = false;
        tdAltura.textContent = "Altura invalida";
        paciente.classList.add("paciente-invalido");
    }
    if (alturaValida && pesoValido){
        let imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

   let pacienteTr = document.createElement("tr");

   let nomeTd = document.createElement("td");
   let pesoTd = document.createElement("td");
   let alturaTd = document.createElement("td");
   let gorduraTd = document.createElement("td");
   let imcTd = document.createElement("td");

   nomeTd.textContent = nome;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);

   let tabela = document.querySelector("#tabela-pacientes");

   tabela.appendChild(pacienteTr);
   
});
