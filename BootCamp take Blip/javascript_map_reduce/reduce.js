const array = [1,2,3,4,5,6];

function reduceArray(arr)
{
   return arr.reduce(function(prev,current)
    {
        return prev + current;
    }
    )
}

console.log(reduceArray(array));
