// Comentário de linha
//var y = 0;

/* 
Comentário de bloco
var y = 0;
*/


var preco = 2;
const DESCONTO = 0.2;
var total = 0;
total = preco - DESCONTO;

function soma(a, b)
{
    return a + b;    
}

console.log(soma(1,4));

function returnEvenValues(array)
{
    let evenNums = [];
    for(let i = 0; i<array.length; i++)
    {
        if(array[i]  % 2 == 0)
        {
            evenNums.push(array[i]);
        }
    }
    console.log('Numeros pares: ',evenNums);
}
let array = [1,2,3,54,6,78,9,0];

returnEvenValues(array);

