//let b=[2,3,4];
//let c=[...b]
//
//c[0]=5;
//console.log(b);
//console.log(c);
//
//
//let a=[1,"a",2,"b"];
//
//for(let i=0;i<a.length;i++)
//{
//    console.log(a[i])
//    
//}


//let frutas = ['m','l','x']
//frutas.splice(1,1)
//let x=frutas.slice(0)
//console.log(x)


a=['aaa','bbb'];
a.push('ccc');
console.log(a);

b=[1,2,3];
b.pop()
b.shift();
console.log(b);

a=['aaa','bbb'];
c=a.join('/');
console.log(c);

a=['aaa','bbb'];
b=[1,2,3];
d=b.concat(a);
console.log(d);


var novoObj={nome:'Pedro',idade:15};
novoObj.sexo='Masculino';
novoObj['localidade']='Maceda';


console.log(novoObj);
console.log(novoObj.nome);
console.log(novoObj['nome']);


var novoObj2 = new Object();
novoObj2.sexo='Masculino';
novoObj2['localidade']='Maceda';
console.log(novoObj2);

novoObj2['localidade']={old:'Porto',new:'Maceda'}
console.log(novoObj2);














