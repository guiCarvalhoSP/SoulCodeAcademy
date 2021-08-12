var qtdAlunos = 0, somaNotas = 0;

qtdAlunos = parseInt(prompt("Digite a quantidade de alunos na sala:"));

var alunos = new Array(qtdAlunos);

for(i=0 ; i<alunos.length; i++){
    alunos[i] = parseFloat(prompt("Digite a nota do " + (i+1) + " aluno:"));
    document.write("Nota do " + (i+1) + "º aluno: " + alunos[i] + "<br>");
}

for(i in alunos){
    somaNotas += alunos[i];
}

document.write("A média das notas é:" + (somaNotas/qtdAlunos));