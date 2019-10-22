const express = require('express');
const app = express();
const mongoCli = require('mongodb').MongoClient;
var dtbs;

mongoCli.connect('mongodb://192.168.4.23:27017/?replicaSet=rs0&readPreference=secondaryPreferred',(err, database)=>{
    if(err){
        console.log('1----->>>'+err);
    }else{
        dtbs = database;
        app.listen(3000);
        console.log("--->> Escuchando en puerto 3000");
    }
});

app.get('/',(req, res)=>{
    dtbs.db('perfil').collection('data').find().toArray((err, list)=>{
        if(err){
            res.send(err)
        }else{
            for(let i=0; i<list.length;i++){
                console.log(list[i].nit +' -> '+ list[i].name)
            }            
            res.send(Object.values(list))
        }
    });               
});