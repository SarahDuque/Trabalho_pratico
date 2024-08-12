var nome = document.getElementById('nome');
var email = document.getElementById('email');
var idade = document.getElementById('age');
var tel = document.getElementById('telef');
var gen = document.getElementById('gen');

function Nm(){
    if(nome == null){
       document.getElementById('alert nome').removeAttribute('hidden'); 
    }
}