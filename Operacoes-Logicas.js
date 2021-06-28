var nome, nota1,nota2,media,passou;

passou = false;

nome= prompt("Digite o nome do aluno: ")
nota1= prompt("Digite a primeira nota: ")
nota2= prompt("Digite a segunda nota: ")

media = (parseInt(nota1) + parseInt(nota2)) /2

if (media >= 50)
    passou=true;
    alert("Aluno aprovado")
    
if (passou && (media >= 70 && media <=90)){
    alert("Muito bom, ficou acima de 70% da turma")
} 
else
    alert("Reprovado ") 
