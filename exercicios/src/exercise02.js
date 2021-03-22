/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

function substituirOcorrencia() {
  let res = document.getElementById('res2')
  let frase = 'teste 1 de 2 string 3'
  // usando a funcao replace para substituir os numeros 1 2 3, por '$'
  let fraseFormatada = frase.replace(/[1-2-3]{1}/g,'$')
  res.innerHTML = `Frase formatada: ${fraseFormatada}`
  return fraseFormatada
}

window.exercise02 = function() {
    console.log("resultado ex2: "+substituirOcorrencia());
  };
  