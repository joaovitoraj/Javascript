var nascimento = new Date(prompt("Digite a data de nascimento (mm/dd/aaaa):"));
 var hoje = new Date(prompt('Digite a data de hoje (mm/dd/aaaa): '));
 var diferenca = parseInt((hoje.getTime() - nascimento.getTime())/(1000*3600*24*365));
 while (nascimento>hoje){
    alert("Por favor digite um valor válido!")
    var nascimento = new Date(prompt("Digite a data de nascimento (mm/dd/aaaa):"));
    var diferenca = parseInt((hoje.getTime() - nascimento.getTime())/(1000*3600*24*365));
 }
 alert(diferenca+' anos')
