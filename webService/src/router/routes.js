/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const Filme = require('../model/filme');
const _ = require('underscore');
const router = express();
router.use(bodyParser.json());
const Temporada = require('../model/temporada')



// Exibe mensagem se esta funcionando a conexao
router.get('/home', async (req, res) =>{
    try{
        // Recuperar todos os filmes
        let filmes = await Filme.find({});
        let finalFilmes = [];

        // Recuperando temporadas
        for (let filme of filmes){
            const temporadas = await Temporada.find({
                filme_id: filme._id
            });

        //  misturar resultados aleatoriamente 
            const newFilme = { ...filme._doc, temporadas};
            finalFilmes.push(newFilme);
        }
        finalFilmes = _.shuffle(finalFilmes);

        // filme principal
        const principal = finalFilmes[0];

        // separar em seços
        const secoes = _.chunk(finalFilmes, 5);

        res.send({principal, secoes});

    }catch(err) {
        res.send({error: true, message: err.message});
    }
});




module.exports = router;


