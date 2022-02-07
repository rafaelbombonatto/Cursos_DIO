// Alunos aprovados
const alunos =[
    {
        nome:"joão",
        nota: 5,
    },
    {
        nome:"josé",
        nota: 7,
    },
    {
        nome:"carlos",
        nota: 9,
    },
    {
        nome:"ana",
        nota: 10,
    },
];

function alunosAprovados(alunos,media)
{
    let aprovados = [];

    for(let indice = 0;indice < alunos.length; indice++)
    {
        const {nota, nome} = alunos[indice];

        if (nota >= media)
        {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,7.5));