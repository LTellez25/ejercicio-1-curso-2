let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora del desafio";

function mensaje(){
    console.log("El botón fue clicado");
}

function ciudad(){
    let ciudad1 = prompt("Dime el nomnbre de una ciudad de brasil");
    alert(`Estuve en ${ciudad1} y me acordé de tí`);
}

function alerta(){
    alert("Yo amo JS");
}

function suma(){
    let numero1= Number(prompt("Digite el primer número"));
    let numero2= Number(prompt("Digite el segundo número"));
    let sum = numero1 + numero2;
    alert(`La suma es ${sum}`);
}