const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');
const homeRouter = require('./routes/home');

const PORT = process.env.PORT || 8080;

const app = express();

// JSON 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, 'public')));
//---- Routes ----// 

// Home Router
app.use('/', homeRouter);
// Products Router
app.use('./api/products', productsRouter);


app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
});