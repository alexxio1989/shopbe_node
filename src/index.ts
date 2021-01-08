import Express from "express";
import mysql from 'mysql';
import { UtenteCtrl } from "./controllers/UtenteCtrl";
import cors from 'cors';

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded( {extended : true} ))


app.use(cors({
    origin: '*'
  }));

let utenteCtrl = new UtenteCtrl();

const connection = mysql.createConnection({
    host     : 'iltempiodibacco.csmzsfzjjqji.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : 'cristian96#',
    database : 'wine'
});

connection.connect((err: any) =>{
    if(err){
        throw err;
    }
    console.log("Mysql Connected ...")
})

const server = app.listen(8000, function () {
    console.log("Listening on port http://localhost:8000");
});

app.get('/' , (req,res) => {
    res.send('Hello World')
});

app.post('/user/save' , (req,res) => {
    utenteCtrl.save(req,res,connection);
});

app.post('/user/login' , (req,res) => {
    utenteCtrl.login(req,res,connection);
})
