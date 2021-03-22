/* E9
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Ordene o array de forma decrescente por idade,
em caso de empate o desempate é pelo id(em ordem crescente)

*/


function ordenarIdadeDec() {
    var elemento = exemploPessoas
    let res = document.getElementById('res9')
    res.innerHTML = ''

    elemento.sort(function(a, b) {
        if (a.age > b.age){
            return -1
        }
        if (a.age < b.age){
            return 1
        }
        if(a.age == b.age) {
            if(a.id < b.id) {
                return -1
            }
            if(a.id > b.id) {
                return 1
            } else {
                return 0
            }
        }
    })
    let pessoasOrdenadasDesc = []
    for (let element of elemento) {
        res.innerHTML += `Nome: ${element.first_name} ${element.last_name} Idade: ${element.age}<br>`
        pessoasOrdenadasDesc += ` ${element.first_name} ${element.last_name} - ${element.age} `
    }
    return pessoasOrdenadasDesc
}


window.exercise09 = function() {
    console.log("resultado ex9: " + ordenarIdadeDec());
};
  