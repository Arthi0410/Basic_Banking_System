const express = require("express")
const cors = require("cors");
const dotenv = require("dotenv")
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./routes/users")
const transferRoute = require("./routes/transfers")
dotenv.config();
const dbconnect = require("./Dbconnection");
app.use(express.json())
app.use(cors());
dbconnect();

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(console.log("Connection succesful"))
//     .catch(err => console.log(err))




app.use("/api/users", userRoute);
app.use("/api/transfers", transferRoute)

app.listen(5000, () => {
    console.log("Server running")
})
