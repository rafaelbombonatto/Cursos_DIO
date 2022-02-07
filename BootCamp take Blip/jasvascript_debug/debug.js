let meuArray = [1,2,3,4,5,6];

function verificaArray(arr, tamanho)
{
    try
    {
        if (!arr || !tamanho)
        {
            throw new ReferenceError("Parâmetros incorretos");
        }

        if (typeof arr  !== 'object')
        {
            throw new TypeError('Parâmetros array incorreto');
        }
        
        if (typeof tamanho !== 'number')
        {
            throw new TypeError('Parâmetros tamanho incorreto');
        }
        
        if(arr.length !== tamanho)    
        {
            throw new RangeError('Tamanho do array diferente do informado');
        }
        return arr;
    }
    catch(e)
    {
        if (e instanceof ReferenceError)
        {  
            console.log("Erro de referência");
            console.log(e.message);
        }
        else
        if (e instanceof TypeError)
        {  
            console.log("Erro de Tipagem");
            console.log(e.message);
        }
        else
        if (e instanceof RangeError)
        {  
            console.log("Erro de tamanho");
            console.log(e.message);
        }
        else        
        {  
            console.log("Erro não esperado: "+e);            
        }
    }
}

console.log(verificaArray(meuArray,7));