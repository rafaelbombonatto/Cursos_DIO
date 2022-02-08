const array = [1,2,3,4,5,6];
const saldo = 100;

function reduceArray(arr,saldoDisponivel)
{
   return arr.reduce(function(prev,current)
    {
        return prev - current;
    },saldoDisponivel
    )
}

console.log(reduceArray(array,saldo));
