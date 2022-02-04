

function comparaNumeros(num1, num2)
{
    let iguais = false;
    let maior10 = false;
    let maior20 = false;
    let soma = 0;
    let resultado = "";

    iguais = num1 === num2;
    soma = num1 + num2;
    maior10 = soma > 10;
    maior20 = soma > 20;

    resultado += `os números ${num1} e ${num2} são `+ (iguais ? "iguais" : "diferentes")+`.\n`;
    resultado += `Sua soma é ${soma}.\n`;
    resultado += `A Soma é `+ (maior10 ? "maior" : "menor/igual")+" que 10.\n";
    resultado += `A Soma é `+ (maior20 ? "maior" : "menor/igual")+" que 20.\n";

    alert(resultado);
}

function capturaNumeros()
{
    
    let num1 = 0;
    let num2 = 0;
    num1 = Number(window.prompt("Digite o primeiro número"));
    num2 = Number(window.prompt("Digite o segundo número"));
    if (!num1 || !num2)
    {
         alert("Digite 2 números validos ");
         capturaNumeros();
     }
     else
     {
          comparaNumeros(num1,num2);
     }
    
    
}

capturaNumeros();
