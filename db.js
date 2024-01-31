const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/hotels';  // Corrected the space before mongodb
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connection to MongoDB server.");
});

db.on('error', (error) => {
    console.log("Error connecting to MongoDB server:", error);
});

db.on('disconnected', () => {
    console.log("MongoDB server is disconnected.");
});

module.exports = {
    db
};