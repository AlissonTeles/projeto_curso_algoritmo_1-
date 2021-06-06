var numero01, numero // pegamos os dois numeros
numero01 = prompt("Digite o primeiro número: ") // definimos os valores
numero = prompt("Digite o seu segundo número: ") // definimos os valores
document.getElementById("paragrafo").innerText = (parseInt(numero01) + " + " + parseInt(numero))
document.getElementById("paragrafo2").innerText = (parseInt(numero01)+ parseInt(numero))
/*
ok, essa parte é um pouco dificil, pegamos o documento e encontramos o valor 
que definimos anteriormente, então inserimos o texto dentro desse "paragrafo" que é a soma

*/