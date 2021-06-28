var resultadosoma,resultadodiminuicao,resultadomultiplicacao,resultadodivisao; 
var resultadomodulo, resultadopotencia, valor01, valor02, valor03; 
valor01 = prompt("Digite o valor do primeiro numero: ") 
valor02 = prompt("Digite o valor do segundo numero") 
valor03 = prompt("Digite o valor do terceiro numero") 
resultadosoma = ((parseInt(valor01) + parseInt(valor02) + parseInt(valor03))) 
resultadodiminuicao = ((valor01 - valor02) - valor03) 
resultadomultiplicacao = (valor01 * valor02 * valor03) 
resultadodivisao = ((valor01/valor02)/valor03) 
resultadomodulo = (valor01 + valor02 + valor03) % 2 
resultadopotencia = ((valor01 ** valor02) ** valor03) 
alert("Valor da soma: "+ resultadosoma)
alert("Valor da diminuisao: " + resultadodiminuicao)
alert("Valor da multi: " + resultadomultiplicacao)
alert("Valor da divisao: " + resultadodivisao)
alert("Valor do modulo: " + resultadomodulo)
alert("Valor da potencia: " + resultadopotencia)

