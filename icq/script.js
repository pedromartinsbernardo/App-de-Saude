function sair(){
    window.location = "../index.html"
}
 function calcular(){
 var cintura = document.getElementById('cintura').value
 var quadril = document.getElementById('quadril').value
 var resultado  = document.getElementById('header')
 var soma = cintura/quadril


resultado.innerHTML=soma


 }