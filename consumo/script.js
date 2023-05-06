function sair(){
    window.location = "../index.html"
}

function calcular(){
   var coposAgua = document.getElementById('input').value
var resultado  = document.getElementById('header')
var soma = 0
soma = coposAgua * 0.24

resultado.innerHTML = soma + ' litros de agua'
 
}