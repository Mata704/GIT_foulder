let n=2;

if (n==1)
{
    console.log("Eu sou único")
}
else if(n==2)
{
    console.log("Somos pares")
}
else if(n==3)
{
    console.log("Somos um trio")
};


switch (n)
{
    case 1:
        console.log("Eu sou único");
        break;
    case 2:
        console.log("Eu sou único");
        break;
    case 3:
        console.log("Somos um trio");
        break;
    default: 
    console.log("Mais do k 3");
}

switch (true)
{
    case n>1 && n<2:
        console.log("sou verdadeiro");
        break;
    default: 
        console.log("nenhum dos anteriores");
}
    
    


