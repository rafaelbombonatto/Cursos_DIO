// Substrituindo numeros pares
let numeros = [0,1,2,3,4,56,676,33,78,34,88,21,13,45 ];
let novosNumeros = [];
numeros.forEach(verificaPares);


function verificaPares(numero)
{   
    let novoNumero = numero % 2 == 0 ? 0 : numero;
    novosNumeros.push(novoNumero);    
}

console.log(novosNumeros);