/*
Vamos pedir o nome, nota 1 e nota 2 e caso a media for maior ou igual a 5 ele passou
*/
var nome, nota1, nota2,media;
nome = prompt("Digite o seu nome: ")
nota1= prompt("Digite a primeira nota: ")
nota2 = prompt("Digite a segunda nota: ")
media = (parseInt(nota1) + parseInt(nota2))/2
if (media <= 50) {
    alert(nome + " Foi Reprovado")
}
else{ 
    alert(nome + " Foi Aprovado!")
}