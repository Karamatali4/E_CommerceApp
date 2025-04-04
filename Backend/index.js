const  express = require('express');
const  dotenv = require('dotenv');
const  cors = require('cors');
const  dbConnection = require('./config/db.js');
const  router = require('./routes/adminRoute.js');
const adminRoutes = require('./routes/adminRoute.js');
const { default: cartRoutes } = require('./routes/cartRoutes.js');

dotenv.config(); 

const app = express();

app.use(express.json()); 
app.use(cors()); 
app.use(router); 

// app.use("/api/auth", authRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/admin", adminRoutes);

app.get('/', (req, res) => {
    res.send('Hello, MERN Stack!');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
    dbConnection(); 
});