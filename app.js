import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4

}
mongoose.connect(CONNECTION_STRING, options).then(() => {
    console.log('connected to database')
})
    .catch((err) => {
        console.log(err)
    })
const app = express();
app.use(cors());
app.use(express.json());
TuitsController(app);
HelloController(app);
UserController(app);
app.listen(process.env.PORT || 4000);