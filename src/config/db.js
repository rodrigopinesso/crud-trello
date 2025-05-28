const mongoose = require ("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("conectou no mongo");
    } catch (error) {
        console.error("erro ao conectar no mongo:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;