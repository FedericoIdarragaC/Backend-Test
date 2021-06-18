const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

app = express()

//Config
app.set('port',process.env.port || 3000);
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Environment variables
dotenv.config({path:'./.env'});

//Init Database
require('./config/database')

//Extract data
const extract_data = false
const extract = require('./extract');

if(extract_data){
    extract.getData()
}

//Routes
const teamRouter = require('./routes/team');
const playersRouter = require('./routes/players');

app.use('/api/v1/team',teamRouter);
app.use('/api/v1/players',playersRouter);

//Start
app.listen(app.get('port'),()=>{
    console.log('Server on port: ',app.get('port'))
})
