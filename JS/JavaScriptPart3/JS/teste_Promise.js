//funçao para determinar
var valor=5

var promise = new Promise(function(resolve,reject)
{
    console.log('Iniciou');
    /*
    setTimeout(function()
    { 
        console.log('promise com sucesso!');
        resolve('promise com sucesso!');

    },3000);

    reject('tudo rebentou!');*/

    if (valor*2===10){
        resolve('correu tudo bem');
    }
    else {
        reject('correu tudo mal');
    }
});




//1s type
promise.then(function(result){console.log('Correu bem1'); console.log(result)},function(error){console.log('Correu mal 1');console.log(error)});