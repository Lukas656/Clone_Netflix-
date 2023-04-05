const database = require('../repository/index');
const Usuario = require('../model/usuario');
const usuarioJSON = require('../data/usuario.json');

const addUsers = async () =>{
    try{
        for(let usuario of usuarioJSON){
            console.log(`Inserindo ${usuario.nome}`)
            await new Usuario(usuario).save();
        }
    }catch(err){
        console.log(err.message)
    }
}

addUsers();