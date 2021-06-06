var resultadosoma,resultadodiminuicao,resultadomultiplicacao,resultadodivisao; // variaveis 
var resultadomodulo, resultadopotencia, valor01, valor02, valor03; // variaveis 
valor01 = prompt("Digite o valor do primeiro numero: ") // valor no tipo int 
valor02 = prompt("Digite o valor do segundo numero") // valor no tipo int
valor03 = prompt("Digite o valor do terceiro numero") // valor no tipo int
resultadosoma = ((parseInt(valor01) + parseInt(valor02) + parseInt(valor03))) // mostra a soma dos valores
resultadodiminuicao = ((valor01 - valor02) - valor03) // mostra a diminuição dos valores
resultadomultiplicacao = (valor01 * valor02 * valor03) // mostra a multiplicação dos valores
resultadodivisao = ((valor01/valor02)/valor03) // mostra a divisão dos valores
resultadomodulo = (valor01 + valor02 + valor03) % 2 // mostra o modulo de 2 que é o resto da divisão por 2
resultadopotencia = ((valor01 ** valor02) ** valor03) // potencia dos 3 numeros 
alert("Valor da soma: "+ resultadosoma)
alert("Valor da diminuisao: " + resultadodiminuicao)
alert("Valor da multi: " + resultadomultiplicacao)
alert("Valor da divisao: " + resultadodivisao)
alert("Valor do modulo: " + resultadomodulo)
alert("Valor da potencia: " + resultadopotencia)

