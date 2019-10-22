const express = require('express');
const mongoCli = require('mongodb').MongoClient;
const app = express();
/*
var dtbs;

mongoCli.connect('mongodb://127.0.0.1:27017/',(error,database)=>{
    if(error){
        console.log('Error al conectarse la bd');
    }else{
        dtbs = database;
        app.listen('3000',()=>{
            console.log('Servidor escuchando en 3000');
        });
    }
});

app.get('/create',(req,res)=>{
    dtbs.db('profiles').createCollection('masDatos',(error,result)=>{
        if(error) throw error;
        res.send('Coleccion añadida.');
        console.log('Coleccion añadida.');
        dtbs.db.close;
    });    
});

app.get('/add',(req,res)=>{
    
    dtbs.db('profiles').collection('datos').insertMany(myobj,(err, result)=>{
        if(err) throw err;
        res.send('documentos insertados: '+result.insertedCount
        +'documentos:\n'+myobj);

    })res.send('documentos insertados: '+myobj.values());
    
    
})*/
var myobj = [
    { name: 'John', nit: '71'},
    { name: 'Peter', nit: '4'},
    { name: 'Amy', nit: '652'},
    { name: 'Hannah', nit: '21'},
    { name: 'Michael', nit: '345'},
    { name: 'Sandy', nit: '2'},
    { name: 'Betty', nit: '1'},
    { name: 'Richard', nit: '331'},
    { name: 'Susan', nit: '98'},
    { name: 'Vicky', nit: '2'},
    { name: 'Ben', nit: '38'},
    { name: 'William', nit: '954'},
    { name: 'Chuck', nit: '989'},
    { name: 'Viola', nit: '1633'}
  ];
  for(item in myobj){
    console.log(JSON.stringify(myobj[item]) +'\n');
}