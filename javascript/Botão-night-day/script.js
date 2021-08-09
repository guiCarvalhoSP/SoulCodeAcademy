var modoNoturno = 0;
function alteraCor() {
  if (modoNoturno == 0) {
    document.body.style.backgroundColor = "rgb(33, 33, 33)";
    document.body.style.color = "rgb(250, 250, 250)"
     document.getElementById("nightbutton").src = "imagens/nightmode-button.png"
    return modoNoturno = 1;
  }
  if (modoNoturno == 1) {
    document.body.style.backgroundColor = "rgb(250, 250, 250)";
    document.body.style.color = "rgb(10, 10, 10)"
    document.getElementById("nightbutton").src = "imagens/daymode-button.png"
    return modoNoturno = 0;
  }

}