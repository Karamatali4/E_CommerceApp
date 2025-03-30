const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(`${process.env.ECOMMERCEDB}`);
    console.log("Database connected successfully");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = dbConnection;
