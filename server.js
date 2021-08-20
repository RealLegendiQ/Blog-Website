import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import DotEnv from 'dotenv';
//components
import Connection from './database/db.js';
import Router from './routes/route.js';

const app = express();
DotEnv.config();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({
  extended: true
}));

app.use('/',Router);

if(process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'));
}

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

const URL = ''; //Place your mongodb connection string here.

Connection(process.env.MONGODB_URI || URL);