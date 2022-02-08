const array = [1,2,3,4,5,6];

const valor1 = {
    value: 2,
}

const valor2  ={
    value: 3,
}

function mapArray(arr, thisArg)
{
    return arr.map(function(item)
    {
      return  item * thisArg.value;
    }, thisArg)    ;
}

console.log(mapArray(array,valor2));
console.log(mapArray(array,valor1));