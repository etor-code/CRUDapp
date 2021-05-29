const mongoose = require('mongoose');
require('dotenv').config();

const database_connection = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(database_connection, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
    
        console.log(`db connection successful: ${conn.connection.host}`);
        
    } catch (err) {
        console.log(`db connection error: ${err.message}`);
    }
};

module.exports = connectDB;
