import validator from './validator.js';

const inputNumeroCartao = (document.getElementById("numeroCard"));



const botaoValidar = document.getElementById("botaoValidar");

botaoValidar.addEventListener("click", validaNumeroCartao);

function validaNumeroCartao(e) {
  e.preventDefault();

  let numeroCartao = inputNumeroCartao.value.replace();

  const retornaValidacao = validator.isValid(numeroCartao);

  document.getElementById("resultadoValidacao").innerHTML = retornaValidacao


}




console.log(validator);
