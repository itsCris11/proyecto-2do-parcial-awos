require('./config/config')
const express = require('express');
const bodyParser = require('body-parser');
const app =  express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
//req es para recibir 
//res es para mandar respuestas del servidor al cliente       

//post insertar
//put actulizar 
//get obtener

app.get('/', function(req, res){
    res.send('<h1>Bienvenido a mi servidor rest</h1>');
});

app.get('/usuario', function(req, res){
    res.json({
        ok: 200,
        mensaje: 'Usuario consultados correctamente'
    });
});

app.post('/usuario', function(req, res){
    let nombre = req.body.nombre;
    let body = req.body;

    if(nombre == undefined){
        res.status(400).json({
            ok: 400,
            mensaje: 'Inserte el nombre'
        });
    }else{
        res.json({
            ok: 200,
            mensaje: 'Usuario insertado correctamente',
            body: body 
        });
    }
});

app.put('/usuario/:id/:nombre', function(req, res){
    let id = req.params.id;
    let nombre = req.params.nombre;
    res.json({
        ok: 200,
        mensaje: 'Usuario actulizado correctamente',
        id: id,
        nombre:  nombre
    });
});

app.delete('/usuario/:id', function(req, res){
    let id = req.params.id;
    res.json({
        ok: 200,
        mensaje: 'Usuario eliminado correctamente',
        id: id
    });
});

app.listen(process.env.PORT , () =>{
    console.log('Servidor Online-Puerto', process.env.PORT);
});