function sair(){
    window.location = "../index.html"

}

function calcular(){

var peso = document.getElementById('Peso').value
 
 var altura  = document.getElementById('Altura').value

 var resultado = document.getElementById("resultado") 

var soma = altura*altura/peso

 resultado.innerHTML=soma
 
}


