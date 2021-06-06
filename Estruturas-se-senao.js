// criar uma calculadora, em uma função para colocar no botão utilizando apenas if e else if
function butaocalcular() { // função para podemos utiliza la no botão 
var nota, nota1, operacao, resultado; // variaveis
nota = prompt("Digite o primeiro numero: ")  // digite
operacao = prompt("Escolha: +, -, x , / ") // digite
nota1 = prompt("Digite o segundo numero: ") // digite

if (operacao == "+"){ // if se for soma
    resultado = (parseInt(nota)  + parseInt(nota1) )
}else if (operacao == "-"){ // "elif" se for menos
    resultado = (parseInt(nota) - parseInt(nota1) )   
}else if (operacao == "x"){ // "elif" caso for multiplicação
    resultado = (parseInt( nota )  * parseInt( nota1 ) )
}else if (operacao == "/"){ // "elif" caso for divisão
    resultado = (parseInt(nota) / parseInt(nota1))
}
else // caso der erro
    alert("FATAL ERRO")
document.getElementById("paragrafo").innerText = resultado // mostrar o codigo na tela
}

