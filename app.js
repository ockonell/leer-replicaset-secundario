const express = require('express');
const app = express();
const mongoCli = require('mongodb').MongoClient;
var dtbs;

mongoCli.connect('mongodb://192.168.4.23:27017/?replicaSet=rs0&readPreference=secondaryPreferred',(err, database)=>{
    if(err){
        console.log('----->>>'+err);
    }else{
        dtbs = database;
        app.listen(3000);
        console.log("Escuchando en puerto 3000");
    }
});

app.get('/',(req, res)=>{
    dtbs.db('perfil').collection('data').find().toArray((err, list)=>{
        if(err){
            console.log('----->>>'+err);
        }else{
            res.send(list);
        }
    })
});