const database = require('../repository/index');
const Filme = require('../model/filme');
const filmeJSON = require('../data/filme.json');

const addFilmes = async () =>{
    try{
        for(let filme of filmeJSON){
            console.log(`Inserindo ${filme.titulo}`)
            await new Filme(filme).save();
        }
    }catch(err){
        console.log(err.message)
    }
}

addFilmes();