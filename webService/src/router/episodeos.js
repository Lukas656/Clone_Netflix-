/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const Episodeo = require('../model/episodeo');
const router = express();
router.use(bodyParser.json());




// Exibe mensagem se esta funcionando a conexao
router.get('/temporada/:temporada', async (req, res) => {
    try{
        const temporada_id = req.params.temporada;
        const episodeos =await Episodeo.find({
            temporada_id,
        });
        res.send({episodeos});
    }catch(err){
        res.send({error: true, message: err.message})
    }
});

module.exports = router;
