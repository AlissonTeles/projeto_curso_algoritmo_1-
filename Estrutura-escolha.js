// calculadora so que com o switch-case
function botao() { //função da calculadora so de apertar o botão 
var nota, nota1, operacao, resultado // variaveis 
nota = prompt("Digite o primeiro numero: ") 
operacao = prompt("Escolha: '+' '-' '*' '/' : ")
nota1 = prompt("Digite o segundo numero: ")
switch (operacao) { // switch pega a variavel "operacao" e faz com cada operação
    case "+": // caso ela for "+" ela faz:
        resultado = parseInt(nota) + parseInt(nota1)    
        break; // ele para aqui e vai para o proximo
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