import validator from './validator.js';

const inputNumeroCartao = (document.getElementById("numeroCard"));
const botaoValidar = document.getElementById("botaoValidar");

botaoValidar.addEventListener("click", validaNumeroCartao, );

function validaNumeroCartao(e) {
  e.preventDefault();

  let numeroCartao = inputNumeroCartao.value.replace();
  let retornaValidacao = validator.isValid(numeroCartao);
  let retornoMascara = validator.maskify(numeroCartao);
  
  if (numeroCartao.length < 13){
    return document.getElementById("resultadoValidacao").innerHTML ="Preencha no mínimo 13 digítos" 
  }
  else if (numeroCartao.length > 16){
    return document.getElementById("resultadoValidacao").innerHTML ="Preencha no máximo 16 digítos" 
  }
  else if (retornaValidacao === false) {
    return document.getElementById("resultadoValidacao").innerHTML ="Cartão inválido"
  }
  else if (retornaValidacao === true){
    return document.getElementById("resultadoValidacao").innerHTML= retornoMascara + " Cartão Válido"
  }
}


console.log(validator);
