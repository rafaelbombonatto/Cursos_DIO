const meuArray = [1,1,2,2,3,3,4,4,5,5,6,7,8,9,9];

function valoresUnicos(arr)
{
    const mySet = new Set(arr);
    
    return [...mySet];
}

console.log(valoresUnicos(meuArray));