// Função para verificar se uma string é palíndroma
const PALAVRAS = ["ovo","amor","A base do teto desaba"];
PALAVRAS.forEach(verificaPalindromo);
console.log(verificaPalindromo2('amma'));

function verificaPalindromo(palavra)
{   
    if(!palavra) return;

    let palavraOriginal = palavra.split(" ").join("").toLowerCase();     
    let novaPalavra = "";
    let condicao = '';
           
    for (let posicao = palavraOriginal.length-1; posicao >= 0; posicao--)
    {
        novaPalavra += palavraOriginal[posicao];        
    }
        
    condicao = palavraOriginal == novaPalavra ? '' : 'não';
    console.log(`${palavra} ${condicao} é Palindroma (${novaPalavra})`)        
}

function verificaPalindromo2(palavra)
{
    if(!palavra)  return;

    for(let i = 0; i< palavra.length / 2; i++)
    {
        if (palavra[i] !== palavra[palavra.length -1 -i])        
        {
            return false;            
        }
    }
    return true;   
}




