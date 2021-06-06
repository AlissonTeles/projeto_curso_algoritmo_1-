// peça dois numeros e pergunte se ele vai querer continuar
function botao() { // função do botão
    var numero1, numero2, parar, resultado;
    do { // do while é a estrutura que serve para repetir
        numero1 = prompt("Digite o valor do primeiro: ") 
        numero2 = prompt("Digite o valor do segundo numero: ")
        resultado = parseInt(numero1) + parseInt(numero2)
        parar = prompt("Que Continuar?(S) (N)")   
    } while (parar = "N"); // ele so para quando chega no "N"
    
document.getElementById("paragrafo").innerText = (numero1 + "+" + numero2 +"=" + resultado)
}