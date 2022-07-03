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