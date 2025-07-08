require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

// console.log(process.env.COLLECTION_NAME);
// const DB = `mongodb+srv://${process.env.COLLECTION_NAME}:${process.env.COLLECTION_PASSWORD}@${process.env.COLLECTION_NAME}.cbqsaya.mongodb.net/?retryWrites=true&w=majority`;
// const DB = `mongodb+srv://${process.env.at9941787}:${process.env.FWsOv4Vk0wZBahVG}@${process.env.at9941787}.@cluster0.ixhpdqs.mongodb.net/?retryWrites=true&w=majority`;
const DB = process.env.MONGO_URI;
mongoose.connect(DB, {
    useNewUrlParser: true,

}).then(() => {
    console.log("connection successful!...");
}).catch((err) => {
    console.log(`connection failed!.... ${err}`);
});
