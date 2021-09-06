$(document).ready(function () {
    $("#alertaCadastro").css({display: "none"});
    $("#alertaFalha").css({display: "none"});

});
function validaPost() {
    var valido = true;

    var nome = $("#nome").val();
    var email = document.getElementById("email");
    var cpf = $("#cpf").val();
    var cep = $("#cep").val();
    var senha = $("#senha").val();
    var confirma = $("#confirma").val();
    var endereco = $("#endereco").val();
    var idade = document.getElementById("idade");

    if(!validaNome(nome)){
        valido = false;
    }
    if(!validaEmail(email)){
        valido = false;
    }
    if(!validaEndereco(endereco)){
        valido = false;
    }
    if(!validaCpf(cpf)){
        valido = false;
    }
    if(!validaIdade(idade)){
        valido = false;
    }
    if(!validaSenha(senha)){
        valido = false;
    }
    if(!validarCep(cep)){
        valido = false;
    }
    if(!confirmaSenha(confirma)){
        valido = false;
    }

    if(valido){
        $("#alertaCadastro").show();
        $("#alertaFalha").hide();
    } else{
        $("#alertaFalha").show();
        $("#alertaCadastro").hide();
    }

}

// Funções de validações
function validaNome(nome) {
    if (nome == null || !isNaN(nome)) {
        $("#nome").css({ border: "2px red solid" });
        return false;
    } else {
        $("#nome").css({ border: "2px green solid" });
        return true;
    }
}

function validaIdade(idade) {
    var data = calculaIdade(idade.value);
    if (data > 130 || data == " " || data <= 0) {
        $(idade).css({ border: "2px red solid" });
        return false;
    } else {
        $(idade).css({ border: "2px green solid" });
        return true;
    }
}

function calculaIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split("-");
    var anoNasc = anoNascParts[0];
    var idade = anoAtual - anoNasc;

    return idade;
}

function validaEmail(email) {
    var usuario = email.value.substring(0, email.value.indexOf("@"));
    var dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);
    if ((usuario.length >= 1) && (dominio.length >= 3) && (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) && (usuario.search(" ") == -1) && (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) && (dominio.indexOf(".") >= 1) && (dominio.lastIndexOf(".") < dominio.length - 1)) {
        email.style.border = "2px solid green"
        return true;
    }
    else {
        email.style.border = "2px solid red"
        return false;
    }
}

var senhaCadastro = 0;
function validaSenha(senha) {
    if(senha.length < 6){
        $("#senha").css({ border: "2px red solid" });
        return false
    } else {
        $("#senha").css({ border: "2px green solid" });
        senhaCadastro = senha;
        return true
    }
}
function confirmaSenha(senha) { 
    if(senhaCadastro != senha || senhaCadastro == senha && senhaCadastro == 0){
        $("#confirma").css({ border: "2px red solid" });
        return false
    } else {
        $("#confirma").css({ border: "2px green solid" });
        return true
    }
 }

 function validaEndereco(endereco) {
     var rua = endereco
     if(rua != ""){
        $("#endereco").css({ border: "2px green solid" });
        return true
     } else{
        $("#endereco").css({ border: "2px red solid" });
        return false
     }
 }

 function validarCep(cep) {
    if(cep.length < 8 || cep.length > 8 || cep == /^[0-9]{8}-[0-9]{8}$/){
        $("#cep").css({ border: "2px red solid" });
        return false;
    } else{
        $("#cep").css({ border: "2px green solid" });
        return true;
    }
     
 }

function validaCpf(cpf) { 
    if(validarCPF(cpf)){
        $("#cpf").css({ border: "2px green solid" });
        return true;
    }else {
        $("#cpf").css({ border: "2px red solid" });
        return false;
    }
 }

// Código pego do site, todos os direitos são do seguinte site: https://www.geradorcpf.com/javascript-validar-cpf.htm
 function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}
