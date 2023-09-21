const mongoose = require("mongoose");

function DbConnection() {
    const DB_URL = process.env.MONGO_URL;

    mongoose.connect("mongodb+srv://arthichebrolu:Qa5bTXgZR0yfKTaz@cluster0.4bnqvvl.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Connection error: "));
    db.once("open", function () {
        console.log("Db connected...");
    });
}

module.exports = DbConnection;