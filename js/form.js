
const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let paciente = obtemPacienteFormulario(form);

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
    imcTd.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

   let tabela = document.querySelector("#tabela-pacientes");

   tabela.appendChild(pacienteTr);
   
});



function obtemPacienteFormulario(form) {

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}