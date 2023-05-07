// Calculadora dinâmica
// Número inicial
// tipo de operação
// Número final

var num = parseInt(prompt('Digite o número: '))
var op = prompt('Digite o tipo de operação (+ - * /): ')
var num2 = parseInt(prompt('Digite o segundo número: '))

while (op != '+' && op != '-' && op != '*' && op != '/'){
    alert('Digite um sinal válido!')
    var op = prompt('Digite o tipo de operação (+ - * /): ')
}
if (op == '+'){
    alert(num+num2)
}else if(op == '-'){
    alert(num-num2)
}else if(op == '*'){
    alert(num*num2)
}else{
    alert(num/num2)
}
