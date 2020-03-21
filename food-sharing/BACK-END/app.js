const express = require('express')
const app = express()
const cors = require("cors");
const ip = require("ip");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const logger = require("morgan");
const campaigns = require("./controllers/orders");
const dbRoute =
    "mongodb+srv://dbFoodDonate:FoodDonate123@cluster0-fo9ue.mongodb.net/test?retryWrites=true&w=majority";
// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger("dev"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))
// connecting to db
// TODO: whitelist YOUR IP - now working on "connect from anywhere"
mongoose
    .connect(dbRoute, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongodb is connected");
    })
    .catch(error => {
        console.log("mongodb is not connected");
        console.log(error);
});

let db = mongoose.connection;
mongoose.set("useFindAndModify", false);
db.once("open", () => console.log("connected to the database"));
// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(5001, () => {
    console.log("App listening on port 5001!");
    console.log(ip.address());
});

campaigns(app);
module.exports = app;