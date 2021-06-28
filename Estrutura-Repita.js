function botao() { 
    var numero1, numero2, parar, resultado;
    do { 
        numero1 = prompt("Digite o valor do primeiro: ") 
        numero2 = prompt("Digite o valor do segundo numero: ")
        resultado = parseInt(numero1) + parseInt(numero2)
        parar = prompt("Que Continuar?(S) (N)")   
    } while (parar = "N"); 
    
document.getElementById("paragrafo").innerText = (numero1 + "+" + numero2 +"=" + resultado)
}