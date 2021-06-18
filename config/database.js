const mongoose = require('mongoose');

const DB_URI = 'mongodb://localhost/Backend_Test_DB';

mongoose.connect(DB_URI,{
    keepAlive:true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Database connected'))
.catch(err => console.log(err));