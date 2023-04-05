const express = require('express');
const morgan = require('morgan');
const database = require('./src/repository/index');
const cors = require('cors');
const filme = require('./src/router/routes');
const usuario = require('./src/router/usuarios');
const episodeos = require('./src/router/episodeos');
const port = 8000;
const app = express();
app.use(cors());
app.use(morgan('dev'));


app.use('/filmes', filme);
app.use('/usuario', usuario);
app.use('/ep', episodeos);


app.listen(port, () => {
    console.log(`Rodando na porta: http://localhost:${port}`)
});