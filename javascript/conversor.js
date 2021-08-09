var unidadeInicial;
var unidadeConvertida;
var unidadeVelocidade;
var conversaoVelocidade;
var variavel;
var valor = 0;
var conversão = 0;

variavel = prompt("Voce quer converter uma medida ou velocidade? Medida = M ; Velocidade = V");

// Calculos de conversão de velocidade
if (variavel == "V" || variavel == "v") {
    unidadeInicial = prompt("Digite qual unidade inicial você quer: Velocidades em km/h; m/s e ft/s");
    valor = parseFloat(prompt("Qual valor que quer converter?"));
    unidadeConvertida = prompt("Para qual unidade deseja receber a conversão? Velocidades em km/h; m/s e ft/s");

    if (unidadeInicial == "km/h") {
        switch (unidadeConvertida) {
            case "m/s":
                document.write("Valor inicial: " + valor + " km/h");
                valor /= 3.6;
                document.write("<br>Valor convertido: " + valor + " m/s");
                break;
            case "ft/s":
                document.write("Valor inicial: " + valor + " km/h");
                valor /= 1.097;
                document.write("<br>Valor convertido: " + valor + " ft/s");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " km/h");
        }
    } else if (unidadeInicial == "m/s") {
        switch (unidadeConvertida) {
            case "km/h":
                document.write("Valor inicial: " + valor + " m/s");
                valor *= 3.6;
                document.write("<br>Valor convertido: " + valor + " km/h");
                break;
            case "ft/s":
                document.write("Valor inicial: " + valor + " m/s");
                valor *= 3.281;
                document.write("<br>Valor convertido: " + valor + " ft/s");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " ms/h");
        }

    } else if (unidadeInicial == "ft/s") {
        switch (unidadeConvertida) {
            case "km/h":
                document.write("Valor inicial: " + valor + " ft/s");
                valor *= 1.097;
                document.write("<br>Valor convertido: " + valor + " km/h");
                break;
            case "m/s":
                document.write("Valor inicial: " + valor + " ft/s");
                valor /= 3.281;
                document.write("<br>Valor convertido: " + valor + " m/s");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " ms/h");
        }
    }

} /* Calculo de conversão de comprimentos*/ else {
    unidadeInicial = prompt("Digite qual unidade inicial você quer: Metros = m; Centimetro = cm; Milimetro = mm; jardas = yd; pes = ft; polegadas = in");

    valor = parseFloat(prompt("Qual valor que quer converter?"));

    unidadeConvertida = prompt("Para qual unidade deseja receber a conversão? Metros = m; Centimetro = cm; Milimetro = mm; jardas = yd; pes = ft; polegadas = in");

    if (unidadeInicial == "m") {
        switch (unidadeConvertida) {
            case "cm":
                document.write("Valor inicial: " + valor + " m");
                valor *= 100;
                document.write("<br>Valor convertido: " + valor + " cm");
                break;
            case "mm":
                document.write("Valor inicial: " + valor + " m");
                valor *= 1000;
                document.write("<br>Valor convertido: " + valor + " mm");
                break;
            case "yd":
                document.write("Valor inicial: " + valor + " m");
                valor *= 1.094;
                document.write("<br>Valor convertido: " + valor + " yd");
                break;
            case "ft":
                document.write("Valor inicial: " + valor + " m");
                valor *= 3.281;
                document.write("<br>Valor convertido: " + valor + " ft");
                break;
            case "in":
                document.write("Valor inicial: " + valor + " m");
                valor *= 39.37;
                document.write("<br>Valor convertido: " + valor + " in");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " m");
        }
    } else if (unidadeInicial == "cm") {
        switch (unidadeConvertida) {
            case "m":
                document.write("Valor inicial: " + valor + " cm");
                valor /= 100;
                document.write("<br>Valor convertido: " + valor + " m");
                break;
            case "mm":
                document.write("Valor inicial: " + valor + " cm");
                valor *= 10;
                document.write("<br>Valor convertido: " + valor + " mm");
                break;
            case "yd":
                document.write("Valor inicial: " + valor + " cm");
                valor /= 91.44;
                document.write("<br>Valor convertido: " + valor + " yd");
                break;
            case "ft":
                document.write("Valor inicial: " + valor + " cm");
                valor /= 30.48;
                document.write("<br>Valor convertido: " + valor + " ft");
                break;
            case "in":
                document.write("Valor inicial: " + valor + " cm");
                valor /= 2.54;
                document.write("<br>Valor convertido: " + valor + " in");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " cm");
        }
    } else if (unidadeInicial == "mm") {
        switch (unidadeConvertida) {
            case "m":
                document.write("Valor inicial: " + valor + " mm");
                valor /= 1000;
                document.write("<br>Valor convertido: " + valor + " m");
                break;
            case "cm":
                document.write("Valor inicial: " + valor + " mm");
                valor /= 10;
                document.write("<br>Valor convertido: " + valor + " cm");
                break;
            case "yd":
                document.write("Valor inicial: " + valor + " mm");
                valor /= 914;
                document.write("<br>Valor convertido: " + valor + " yd");
                break;
            case "ft":
                document.write("Valor inicial: " + valor + " mm");
                valor /= 305;
                document.write("<br>Valor convertido: " + valor + " ft");
                break;
            case "in":
                document.write("Valor inicial: " + valor + " mm");
                valor /= 25.4;
                document.write("<br>Valor convertido: " + valor + " in");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " mm");
        }
    } else if (unidadeInicial == "yd") {
        switch (unidadeConvertida) {
            case "m":
                document.write("Valor inicial: " + valor + " yd");
                valor /= 1.094;
                document.write("<br>Valor convertido: " + valor + " m");
                break;
            case "cm":
                document.write("Valor inicial: " + valor + " yd");
                valor *= 91.44;
                document.write("<br>Valor convertido: " + valor + " cm");
                break;
            case "mm":
                document.write("Valor inicial: " + valor + " yd");
                valor *= 914;
                document.write("<br>Valor convertido: " + valor + " mm");
                break;
            case "ft":
                document.write("Valor inicial: " + valor + " yd");
                valor *= 3;
                document.write("<br>Valor convertido: " + valor + " ft");
                break;
            case "in":
                document.write("Valor inicial: " + valor + " yd");
                valor /= 36.6;
                document.write("<br>Valor convertido: " + valor + " in");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " yd");
        }
    } else if (unidadeInicial == "ft") {
        switch (unidadeConvertida) {
            case "m":
                document.write("Valor inicial: " + valor + " ft");
                valor /= 3.281;
                document.write("<br>Valor convertido: " + valor + " m");
                break;
            case "cm":
                document.write("Valor inicial: " + valor + " ft");
                valor *= 30.48;
                document.write("<br>Valor convertido: " + valor + " cm");
                break;
            case "mm":
                document.write("Valor inicial: " + valor + " ft");
                valor *= 305;
                document.write("<br>Valor convertido: " + valor + " mm");
                break;
            case "yd":
                document.write("Valor inicial: " + valor + " ft");
                valor /= 3;
                document.write("<br>Valor convertido: " + valor + " yd");
                break;
            case "in":
                document.write("Valor inicial: " + valor + " ft");
                valor *= 12;
                document.write("<br>Valor convertido: " + valor + " in");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " ft");
        }
    } else if (unidadeInicial == "in") {
        switch (unidadeConvertida) {
            case "m":
                document.write("Valor inicial: " + valor + " in");
                valor /= 39.37;
                document.write("<br>Valor convertido: " + valor + " m");
                break;
            case "cm":
                document.write("Valor inicial: " + valor + " in");
                valor *= 2.54;
                document.write("<br>Valor convertido: " + valor + " cm");
                break;
            case "mm":
                document.write("Valor inicial: " + valor + " in");
                valor *= 25.4;
                document.write("<br>Valor convertido: " + valor + " mm");
                break;
            case "yd":
                document.write("Valor inicial: " + valor + " in");
                valor /= 36;
                document.write("<br>Valor convertido: " + valor + " yd");
                break;
            case "ft":
                document.write("Valor inicial: " + valor + " in");
                valor /= 12;
                document.write("<br>Valor convertido: " + valor + " ft");
                break;
            default: valor = valor,
                document.write("Valor: " + valor + " ft");
        }
    }
}
