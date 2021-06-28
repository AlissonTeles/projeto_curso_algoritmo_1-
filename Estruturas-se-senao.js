function butaocalcular() { 
var nota, nota1, operacao, resultado; 
nota = prompt("Digite o primeiro numero: ")  
operacao = prompt("Escolha: +, -, x , / ") 
nota1 = prompt("Digite o segundo numero: ")

if (operacao == "+"){ 
    resultado = (parseInt(nota)  + parseInt(nota1) )
}else if (operacao == "-"){ 
    resultado = (parseInt(nota) - parseInt(nota1) )   
}else if (operacao == "x"){ 
    resultado = (parseInt( nota )  * parseInt( nota1 ) )
}else if (operacao == "/"){ 
    resultado = (parseInt(nota) / parseInt(nota1))
}
else // caso der erro
    alert("FATAL ERRO")
document.getElementById("paragrafo").innerText = resultado 
}

