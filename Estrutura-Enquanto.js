
function botao() { 
var limitador, quantidade, idade, nome; 
quantidade = prompt ("Digite a quantidade de vezes que vai ser verificado a idade: ")
limitador = 1 
while (limitador <= quantidade)  { 
    nome = prompt("Digite o nome: ") 
    idade = prompt("Digite a idade: ") 
    if (idade >= 18) { 
        alert("Voce e maior de idade")        
    }
    else 
        alert("Voce nao e maior de idade")
    limitador++ 
document.getElementById("paragrafo").innerText = (nome + " e " + idade)
}  
}
