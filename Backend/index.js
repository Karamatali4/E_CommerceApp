const  express = require('express');
const  dotenv = require('dotenv');
const  cors = require('cors');
const  dbConnection = require('./config/db.js');
const  router = require('./routes/userRoute.js');

dotenv.config(); 

const app = express();

app.use(express.json()); 
app.use(cors()); 
app.use(router); 


app.get('/', (req, res) => {
    res.send('Hello, MERN Stack!');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    dbConnection(); 
});