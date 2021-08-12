var numeros = new Array(6);

function aposta(){

    document.write("Números para se apostar: ");

    for(i=0; i<6; i++){
        var verificar = 0;

        while(!verificar){
            var aux = Math.floor(Math.random() * 60) + 1;
            var validar = numeros.find(elemento => elemento === aux);
            if(validar != aux){
                numeros[i] = aux;
                verificar = 1;
            }
        }
    }

    document.writeln(numeros.sort((a, b) =>{
        if (a < b)
          return -1
        else if (a > b)
          return 1
    }));

}