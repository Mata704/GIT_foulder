//Cria uma string à escolha com 10 caracteres 
var a="O Benfica é o Maior";

//Obtém o comprimento dessa string;
var c= a.length;
console.log(c);

//Obtém em que posição se encontra a segunda palavra da string;
c= a.indexOf("Benfica");
console.log(c);

//Substitui a primeira palavra por :Javascript é espectacular;
c= a.replace("O", "Javascript é espectacular;")
console.log(c);

//Transforma a string em maiúsculas e minúsculas; 
var d=c.toUpperCase();
console.log(d);
d=c.toLowerCase();
console.log(d);

//Divide a string na palavra espectacular;
var x=d.split("espectacular");
console.log(x);


