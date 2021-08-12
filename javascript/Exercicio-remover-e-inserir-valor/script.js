var S= ["A","b","B","C","c",1, 2, 3];

function imprimeVetor(){
    document.write("S=[" + S + "]<br>");
}

imprimeVetor();

// Insira na primeira posição do vetor o elemento "a" e exiba na tela; 
S.unshift("a");
imprimeVetor();

// Insira na ultima posição do vetor o elemento "4" e exiba na tela; 
S.push(4);
imprimeVetor();

// Remova o elemento "c" do vetor e exiba na tela;
for(i=5; i<S.length-1; i++){
    S[i] = S[i+1];
}
S.pop();
imprimeVetor();

// Remova o primeiro elemento do vetor e exiba na tela;
S.shift();
imprimeVetor();

// Remova o ultimo elemento do vetor e exiba na tela;
S.pop();
imprimeVetor();