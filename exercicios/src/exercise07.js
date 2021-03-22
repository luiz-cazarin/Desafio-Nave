/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

 */


function buscaPessoaAgeMenor25() {
    let res = document.getElementById('res7')
    // for percorrendo o array do objeto e retornando o primeiro elemento achado cuja idade seja menor que 25 anos
    for (let key in exemploPessoas) {
        if (exemploPessoas[key].age <25){
                res.innerHTML = `Nome: ${exemploPessoas[key].first_name} ${exemploPessoas[key].last_name} idade: ${exemploPessoas[key].age}`
                return `${exemploPessoas[key].first_name} ${exemploPessoas[key].last_name}`
        }
    }
    res.innerHTML = `Nenhum resultado foi encontrado`
    return `Nenhum resultado foi encontrado`
}

window.exercise07 = function() {
    console.log("resultado ex7: "+ buscaPessoaAgeMenor25());
  };
  