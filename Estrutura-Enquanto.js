// perguntar a quantidade de vezes que vai querer a idade e ver se é maior de 18 anos

function botao() { // função para pegar o botão na tela
var limitador, quantidade, idade, nome; // variavel
quantidade = prompt ("Digite a quantidade de vezes que vai ser verificado a idade: ")
limitador = 1 // limitador é igual a 1 para não repetir 2 vezes quando escolher 1 
while (limitador <= quantidade)  { // enquanto o limitador for menos que a quantidade fazemos o codigo:
    nome = prompt("Digite o nome: ") // pergunta o nome
    idade = prompt("Digite a idade: ") // pergunta a idade
    if (idade >= 18) { // se a idade for maior ou igual a 18 é maior de idade
        alert("Voce e maior de idade")        
    }
    else // se não for maior ou igual a 18 é menor de idade
        alert("Voce nao e maior de idade")
    limitador++ // no final de tudo isso somamos mais 1 no limitador para não ficar infinito
document.getElementById("paragrafo").innerText = (nome + " e " + idade)
}  
}
