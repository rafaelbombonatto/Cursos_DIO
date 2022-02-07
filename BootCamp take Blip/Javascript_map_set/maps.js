function getAdmin(myMap){
    let Admins = [];

    for([key,value] of myMap)   
    {
        if (value === 'Admin')
        {
            Admins.push(key);
        }
    }
    return Admins;
}

const usuario = new Map();

usuario.set('Luiz','Admin');
usuario.set('joao','Developer');
usuario.set('ana','Admin');

console.log(getAdmin(usuario));