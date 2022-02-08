const array = [1,2,3,4,5,6];

function filterArray(arr, metodo)
{
    return arr.filter(metodo);
}

function callbackPares(item)
{
    return item % 2 === 0;
}

function callbackImpares(item)
{
    return item % 2 !== 0;
}



console.log("pares: "+filterArray(array, callbackPares));
console.log("impares: "+filterArray(array, callbackImpares));
