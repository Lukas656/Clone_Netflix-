/* eslint-disable linebreak-style */
const express = require('express');
const bodyParser = require('body-parser');
const Usuario = require('../model/usuario');
const router = express();
router.use(bodyParser.json());




// Exibe mensagem se esta funcionando a conexao
router.post('/login', async (req, res) => {
    try{
        const credenciais = req.body;
        const usuario = await Usuario.findOne(credenciais);
        if(usuario){
            res.send({usuario});
        }else{
            res.send({error: true, message: 'nenhum Usuário Encontrado!!'})
        }
    }catch(err){
        res.send({error: true, message: err.message})
    }
});

module.exports = router;
