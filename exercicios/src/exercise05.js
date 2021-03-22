/* E5
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima uma mensagem de saudação com o nome completo para cada um dos objetos.

Ex.:
Olá, Fulano de tal!
Olá, Juca da silva!
...

*/


var exemploPessoas = [
    {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
    {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
    {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
    {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
]

function saudacoes() {
    let res = document.getElementById('res5')
    res.innerHTML = ''
    let arrayObj = []
    // for percorrendo o array do objeto e inserindo as frases personalizadas no documento html
    for (let pessoas of exemploPessoas) {
        res.innerHTML += `Olá, ${pessoas.first_name} ${pessoas.last_name}!<br>`
        arrayObj += `Olá, ${pessoas.first_name} ${pessoas.last_name}! `
    }

    return  arrayObj
}


window.exercise05 = function() {
    console.log("resultado ex5: "+saudacoes());
  };
  