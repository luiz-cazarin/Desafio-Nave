/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/

function alterarFrase() {
    let frase = 'T35t3 d3 35t4g1o'
    let res = document.getElementById('res3')
    // substituindo numeros pelas variáveis respectivas usando a funcao replace
    let num3formatado = frase.replace(/[3]{1}/g,'e')
    let num5formatado = num3formatado.replace(/[5]{1}/g,'s')
    let num4formatado = num5formatado.replace(/[4]{1}/g, 'a')
    let num1formatado = num4formatado.replace(/[1]{1}/g, 'i')
    let fraseFormatada = num1formatado
    res.innerHTML = `Frase formatada: ${fraseFormatada}`
    return fraseFormatada
}


window.exercise03 = function() {
    console.log("resultado ex3: "+alterarFrase());
  };
  