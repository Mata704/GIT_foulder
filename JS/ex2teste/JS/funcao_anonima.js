let fa = function()
{
   console.log("Pedro José de Pinho Mata");
};
fa();

let fb = function(num1,num2)
{
    return num1+num2;
}
console.log(fb(2,1));


//IIEF
(function()
{
   console.log("Isto é um IIFE");
})();

(function(num1,num2)
{
   console.log(num1+num2);
})(2,2);



// Closure
function dividir(x)
    {
        return function()
        {
            return x/2;
        }

    };


let z = dividir(2);
console.log(z()) ;
//ou
console.log(dividir(2)());


function divisao(x)
{

    return function(y)
    {
        return x / y;
    }

}

z = divisao(5);
console.log(z(2))
//ou
console.log(divisao(5)(2));

function xpto()
    {
        console.log('olá')
    }


//funcao dentro de funcao
function teste()
{
    function xpto()
    {
        console.log('Aqui')
    }

    xpto();
}
teste();
xpto();


//funcao construtora
function Livro(titulo,autor)
{
    this.titulo = titulo;
    this.autor = autor;

    this.changetitulo = function(newtitle)
    {
        this.titulo=newtitle;
    }

}

let xp1 = new Livro('Os três mosqueteiros','Alexandre Dumas')
let xp2 = new Livro('Os Maias','Eça de Queiroz')

console.log(xp1);
console.log(xp2);

xp1.changetitulo('O Condede Monte Cristo.');
console.log(xp1);











