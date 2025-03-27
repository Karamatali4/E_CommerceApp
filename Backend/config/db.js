const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect();
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
    }
};

module.exports = dbConnection;
