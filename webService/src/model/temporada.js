const mongoose = require('mongoose');

const Temporada = mongoose.model('Temporada', {
    filme_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Filme',
    },
    titulo: {
        type: String,
        required: true,
    },
});



module.exports = Temporada;