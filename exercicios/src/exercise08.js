/* E8
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima todos os elementos em que a idade é menor que 30.

 */


function buscaPessoasAgeMenor30() {
    let res = document.getElementById('res8')
    let pessoasAgeMenor30 = []
    res.innerHTML = ''
    for (let key in exemploPessoas) {
        if (exemploPessoas[key].age <30){
            pessoasAgeMenor30 += `${exemploPessoas[key].first_name} ${exemploPessoas[key].last_name} `
            res.innerHTML += `Nome: ${exemploPessoas[key].first_name} ${exemploPessoas[key].last_name} - Idade: ${exemploPessoas[key].age}<br>`
        }
    }
    return pessoasAgeMenor30
}





window.exercise08 = function() {
    console.log("resultado ex8: "+buscaPessoasAgeMenor30());
  };
  