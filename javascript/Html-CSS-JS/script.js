var qtdTemp = 0, qtdNomes = 0;
var temperaturas = [], nomes = [];

function qtdDados(){
    var verifica = 0;
    while(!verifica){
        qtdTemp = parseInt(prompt("Quantas temperaturas vai querer? Digite um valor entre 0 a 10: "))
        if(qtdTemp > 0 && qtdTemp < 10){
            verifica = 1;
        } else{
            verifica = 0
            alert("Valor digitado inválido")
        }
    }

    verifica = 0;
    while(!verifica){
        qtdNomes = parseInt(prompt("Quantas nomes vai querer? Digite um valor entre 0 a 10: "))
        if(qtdNomes > 0 && qtdNomes < 10){
            verifica = 1;
        } else{
            verifica = 0
            alert("Valor digitado inválido")
        }
    }

    inserirDados();
}

function inserirDados(){
    temperaturas[qtdTemp];
    nomes[qtdNomes];

    var verifica = 0;

    for(i=0; i<qtdTemp; i++){
        verifica = 0;
        while(!verifica){
            var aux = parseFloat(prompt("Digite a temperatura " + (i+1) + ". Utilize ponto ao invés de virgula:"));
            if(isNaN(aux) ){
                alert("Valor inválido, tente novamente!")
            } else{
                temperaturas[i] = aux;
                verifica = 1;
            }
        }

    }

    for(i=0; i<qtdNomes; i++){
        verifica = 0;
        while(!verifica){
            var aux = prompt("Digite nome da pessoa " + (i+1) + ": ");
            if(aux === ""){
                alert("Nome inválido, tente novamente!")
            } else{
                nomes[i] = aux;
                verifica = 1;
            }
        }

    }

    imprimirDados();

}

function imprimirDados(){
    var verifica;

    // Verificar se tem o nome Eliana
    verifica = nomes.find(elemento => elemento === "Eliana" || elemento === "eliana");
    if(verifica){
        document.write("Há o nome Eliana.<br>");
    } else{
        document.write("Não há o nome Eliana.<br>");
    }

    // Verificar as temperaturas maiores que 20
    document.writeln("Temperaturas maiores que 20: " + temperaturas.filter(elemento => elemento > 20) + "<br>");    

    // Verificar se tem o nome Carlos e imprime sua posição
    var verifica = nomes.findIndex(elemento => elemento === "Carlos" || elemento === "carlos");
    if(verifica >= 0){
        document.write("O nome carlos está na posição " + verifica + ", e foi o " + (verifica + 1) + "º nome a ser digitado.<br>");
    } else{
        document.write("Não possui o nome Carlos.<br>");
    }

    //Exibir o cubo das temperaturas.
    document.write("Temperaturas ao quadrado: ");
    temperaturas.forEach(element =>{
        document.write(Math.pow(element, 2) + " | ");
    });

    document.write("<br> Fim da operação");



}