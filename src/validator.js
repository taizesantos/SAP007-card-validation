const validator = {

  isValid(numeroCartao) {
    let arrayDigitos = numeroCartao.split("").map(Number);
    let soma = 0;

    for (let i = 0; i < arrayDigitos.length; i++) {
      let indice = arrayDigitos.length - i - 1;
      let valorDigito = arrayDigitos[indice];
      if (i % 2 === 1) {
        valorDigito *= 2;
        if (valorDigito > 9) {
          valorDigito -= 9;
        }
        arrayDigitos[indice] = valorDigito
      }
      soma += valorDigito;
    }
    if (soma % 10 === 0 && numeroCartao !== "" && soma !== 0) {
      return true;
    } else {
      return false;
    }
  },


  maskify(numeroCartao) {
    let ocultaNumero = [];
    for (let i = 0; 1 < numeroCartao.length; i++) {
      if (i < numeroCartao.length - 4) {
        ocultaNumero.push("#");
      }
      else {
        ocultaNumero.push(numeroCartao[i]);
      }
    }
    return ocultaNumero.join("");
  },
};

export default validator;
