let lines = gets().split("\n");

let n = parseInt(lines.shift());
//escreva o seu código aqui
function getText(N)
{
  if(N >= 1 && N <= 34)
  {
    const text = 'life is not a problem to be solved';
    return text.substring(0, N).toUpperCase().concat('\n');  
  }
  else
  {
    return "Número deve estar entre 1 e 34";
  }
}  

console.log(getText(10));