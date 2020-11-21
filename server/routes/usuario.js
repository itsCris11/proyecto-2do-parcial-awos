const express = require('express');
const app =  express();
app.get('/', function(req, res){
    res.send('<h1>Bienvenido a mi servidor rest(Local host)</h1>');
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

module.exports = app;