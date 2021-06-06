// fazer um programa que calcula o fatorial que é a multiplicação do numero vezes o anterior
// ex: 3! é 3 x 2 x 1 = 6 
function botao(params) { // função para aparecer no botao
var numero, fatorial, contador; // variaveis 
numero = prompt("Digite o numero que deseja saber o fatorial") 
fatorial = 1 // fatorial precisa ser um para a multiplicação não da problema
for (let contador = 1; parseInt(contador) <= parseInt(numero); contador++) { // nessa linha ele manter o contador igual a 1 e caso ele for menor que o numero que nos escolhemos ele passa para o proximo codigo
    fatorial = parseInt(fatorial) * parseInt(contador) // ele pega o fatorial 1 e multiplica pelo contador o contador ++ ele vai somando mais um ele faz isso até ficar igual ao nosso numero
}
document.getElementById("paragrafo").innerText = ("O fatorial de " + numero + " e: " + fatorial)
}
