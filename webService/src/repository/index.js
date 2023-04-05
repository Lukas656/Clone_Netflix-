const mongoose = require('mongoose');

mongoose
    .set('strictQuery', true)
    .connect(`mongodb://localhost:27017/Netflix`)

