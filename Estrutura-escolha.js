function botao() { 
var nota, nota1, operacao, resultado 
nota = prompt("Digite o primeiro numero: ") 
operacao = prompt("Escolha: '+' '-' '*' '/' : ")
nota1 = prompt("Digite o segundo numero: ")
switch (operacao) { 
    case "+": 
        resultado = parseInt(nota) + parseInt(nota1)    
        break; 
    case "-":
        resultado = parseInt(nota) - parseInt(nota1)    
        break;
    case "*":
        resultado = parseInt(nota) * parseInt(nota1)    
        break; 
    case "/":
    resultado = parseInt(nota) / parseInt(nota1)    
    break;       
    default:
        break;          
    }
document.getElementById("paragrafo").innerText = resultado   
}