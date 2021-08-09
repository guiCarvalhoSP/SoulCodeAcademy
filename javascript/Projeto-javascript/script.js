function charout() {
    document.getElementsByClassName('images')[0].src = "./img/drowned.gif";
    document.getElementsByClassName('images')[0].style.width = "100%";
    document.getElementsByClassName('images')[0].style.height = "50vh";
}
function charin() {
    document.getElementsByClassName('images')[0].src = "./img/nodrowned.gif";
    document.getElementsByClassName('images')[0].style.width = "100%";
    document.getElementsByClassName('images')[0].style.height = "50vh";
}

function charexpand() {
    document.getElementsByClassName('expandp')[0].innerHTML = "Zumbi é a criatura hostil mais comum do jogo, você deve defender seus aliados deles."
}

function char2out() {
    document.getElementsByClassName('images')[1].src = "./img/thick.gif";
    document.getElementsByClassName('images')[1].style.width = "100%";
    document.getElementsByClassName('images')[1].style.height = "50vh";

}
function char2in() {
    document.getElementsByClassName('images')[1].src = "./img/nothick.gif";
    document.getElementsByClassName('images')[1].style.width = "100%";
    document.getElementsByClassName('images')[1].style.height = "50vh";
}

function char2expand() {
    document.getElementsByClassName('expandp')[1].innerHTML = "Steve é o protagonista do jogo, um espadachin com dons incríveis."
}

function char3out() {
    document.getElementsByClassName('images')[2].src = "./img/creeper2.gif";
    document.getElementsByClassName('images')[2].style.width = "100%";
    document.getElementsByClassName('images')[2].style.height = "50vh";
}
function char3in() {
    document.getElementsByClassName('images')[2].src = "./img/nocharged.gif";
    document.getElementsByClassName('images')[2].style.width = "100%";
    document.getElementsByClassName('images')[2].style.height = "50vh";
}

function char3expand() {
    document.getElementsByClassName('expandp')[2].innerHTML = "Creepers são criaturas hostis fatais, com um alto poder de explosão e destruição."
}

function copiar() {
    alert('COPIANDO???!');
}

var y = 0;
function keyspressed() {
    document.getElementById("count").innerHTML = y += 1;
}

// SCRIPT 

function validacao() {
    var nome = document.getElementById("nome");
    var user_name = document.getElementById("nick");
    var email = document.getElementById("email");
    var idade = document.getElementById("idade");
    var senha = document.getElementById("senha");

    if (nome.value == "")
        document.getElementById("nome").style.backgroundColor = "red";
    else
        document.getElementById("nome").style.backgroundColor = "green";
    if (user_name.value == "")
        document.getElementById("nick").style.backgroundColor = "red";
    else
        document.getElementById("nick").style.backgroundColor = "green";
    if (email.value == "")
        document.getElementById("email").style.backgroundColor = "red";
    else
        document.getElementById("email").style.backgroundColor = "green";
    if (idade.value < 18 || idade.value == "" || isNaN(idade.value)) {
        document.getElementById("idade").style.backgroundColor = "red";
    }
    else
        document.getElementById("idade").style.backgroundColor = "green";
    if (senha.value == "")
        document.getElementById("senha").style.backgroundColor = "red";
    else
        document.getElementById("senha").style.backgroundColor = "green";
}

function colou() {
    alert("Você colou uma senha! Cuidado para o reuso de senhas.");
}

function select() {
    alert("Você selecionou seu nome!");
}

function formreset() {
    alert("Você limpou o formulário");
}

// SCRIPT 2

var modoNoturno = 0;
function alteraCor() {
    if (modoNoturno == 0) {
        document.body.style.backgroundColor = "rgb(33, 33, 33)";
        document.body.style.color = "rgb(250, 250, 250)";
        document.getElementById("nightbutton").src = "img/nightmode-button.png";
        document.getElementsByClassName('form1')[0].style.backgroundColor = "rgb(94, 94, 94)";
        document.getElementsByClassName('namec1')[0].style.backgroundColor = "rgb(94, 94, 94)";
        document.getElementsByClassName('namec2')[0].style.backgroundColor = "rgb(94, 94, 94)";
        document.getElementsByClassName('namec3')[0].style.backgroundColor = "rgb(94, 94, 94)";
        document.getElementsByClassName('chartitle')[0].style.backgroundColor = "rgb(94, 94, 94)";
        return modoNoturno = 1;
    }
    if (modoNoturno == 1) {
        document.body.style.backgroundColor = "rgb(206, 210, 255)";
        document.body.style.color = "rgb(10, 10, 10)"
        document.getElementById("nightbutton").src = "img/daymode-button.png"
        document.getElementsByClassName('form1')[0].style.backgroundColor = "rgb(170, 177, 253)";
        document.getElementsByClassName('namec1')[0].style.backgroundColor = "rgb(170, 177, 253)";
        document.getElementsByClassName('namec2')[0].style.backgroundColor = "rgb(170, 177, 253)";
        document.getElementsByClassName('namec3')[0].style.backgroundColor = "rgb(170, 177, 253)";
        document.getElementsByClassName('chartitle')[0].style.backgroundColor = "rgb(170, 177, 253)";
        return modoNoturno = 0;
    }

}

//SCRIPT 3


function Aumentar() {
    document.getElementsByClassName("aumentar")[0].style.fontSize = "10vh";
    document.getElementsByClassName("aumentar")[1].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[2].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[3].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[4].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[5].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[6].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[7].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[8].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[9].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[10].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[11].style.fontSize = "6vh";
    document.getElementsByClassName("aumentar")[12].style.fontSize = "100%";

}

function Diminuir(){
    document.getElementsByClassName("aumentar")[0].style.fontSize = "7vh";
    document.getElementsByClassName("aumentar")[1].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[2].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[3].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[4].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[5].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[6].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[7].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[8].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[9].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[10].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[11].style.fontSize = "3vh";
    document.getElementsByClassName("aumentar")[12].style.fontSize = "70%";
}
