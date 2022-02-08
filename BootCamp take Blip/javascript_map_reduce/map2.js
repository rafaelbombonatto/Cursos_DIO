const array = [1,2,3,4,5,6];

function mapArray(arr)
{
    return arr.map(function(item)
    {
      return  item * 2;
    })    ;
}



console.log(mapArray(array));
