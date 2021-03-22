/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

function maiorString() {
  // nome 1 e nome 2 recebendo os valores digitados nas caixa de texto no documento html
  let nome1 = document.getElementById('txtNome1')
  let nome2 = document.getElementById('txtNome2')
  let res = document.getElementById('res1')
  // atribuindo o tamanho das strings nas variaveis
  let numNome1 = nome1.value.length
  let numNome2 = nome2.value.length
  
  // variavel que vai receber o maior nome
  let maiorNome = ''
  res.innerHTML = ''
  // verificando o tamanho das duas strings e retornando a maior string
  if (numNome1 == 0 || numNome2 == 0){
      window.alert('[Erro] Insira dois nomes validos')
      res.innerHTML = 'Nao foi possivel comparar os nomes'
      return maiorNome = 'Nao foi possivel comparar os nomes'
  } else if (numNome1 > numNome2){
      maiorNome = nome1.value
      res.innerHTML = `Maior nome: ${maiorNome}`
      return maiorNome
  } else if(numNome2 > numNome1) {
      maiorNome = nome2.value
      res.innerHTML = `Maior nome: ${maiorNome}`
      return maiorNome
    } else if (numNome1 == numNome2){
      res.innerHTML = 'Os nomes possuem o mesmo tamanho'
      maiorNome = 'Os nomes possuem o mesmo tamanho'
      return maiorNome
  }


}
  
  window.exercise01 = function() {
   console.log("resultado ex1: "+maiorString())
  };
  