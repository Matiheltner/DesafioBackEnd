const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const Contenedor = require('./clase.js')
const newClass = new Contenedor('products.json');

const server = app.listen(PORT, () =>{
    console.log(`Escuchando en el puerto ${PORT}`);
})

server.on("Error", error => console.log(`Error en el servidor ${error}`));

app.get('/', (req, res) =>{
    res.send('¡Bienvenido al servidor de Mati!');
})

app.get('/products', async (req, res) =>{

    const products = await newClass.getAll();

    res.send( JSON.stringify( products) );
})

app.get('/randomProduct', async (req, res) =>{

    const products = await newClass.getAll();

    const random = Math.floor(Math.random() * products.length);

    const product = await newClass.getById(random);

    res.send( JSON.stringify( product) );
})