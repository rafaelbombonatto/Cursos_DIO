function calculaIdade(anos)
{
    return `Daqui a ${anos}, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 =
    {
        nome:"joao",
        idade: 15,
    };

    const animal1 =
        {
            nome:"toto",
            idade: 10,
        };    

// console.log(calculaIdade.call(pessoa1,4));
console.log(calculaIdade.apply(pessoa1,[10]));