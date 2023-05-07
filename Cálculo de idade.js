var atual = prompt("Digite o ano em que estamos: ");
var nascimento = prompt("Digite o ano de nascimento: ");

while(nascimento > atual){
    alert('Informe um ano válido')
    var nascimento = prompt("Digite o ano de nascimento: ");}
alert(atual-nascimento+' ano(s)')
