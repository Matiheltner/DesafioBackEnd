const express = require('express');
const { Router } = express;

const router = Router();


// Products
const products = [
    {name: "Producto 1", price: 42, id: 1},
    {name: "Producto 2", price: 52, id: 2},
    {name: "Producto 3", price: 155, id: 3},
    {name: "Producto 4", price: 616, id: 4},
    {name: "Producto 5", price: 622, id: 5}
];


//---- CRUD OPERATIONS ----//

// GET ALL PRODUCTS
router.get('/', (req, res) => {
    res.send(products)
})

// GET ONE PRODUCT BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const index = products.findIndex( elem => elem.id == id);

    if(index != -1){
        res.send(products[index]);
    }
    else res.status(404).send({error: 'Producto no encontrado'});
})

// POST ONE PRODUCT
router.post('/', (req, res) => {
    const { name, price } = req.body;

    const id = products[products.length - 1].id + 1;

    const newProduct = { name, price, id};

    products.push(newProduct);

    res.status(201).send(newProduct);
})

// PUT ONE PRODUCT BY ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const product = products.find(elem => elem.id == id);

    if(!product){
        res.status(404).send({error: 'Producto no encontrado'});
        return
    }

    product.name = name;
    product.price = price;

    res.sendStatus(201);
})

// DELETE ONE PRODUCT BY ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const index = products.findIndex(elem => elem.id == id)

    if(index == -1){
        res.status(404).send({error: 'Producto no encontrado'});
        return
    }

    products.splice(index, 1);
    res.status(200).send('Producto eliminado');
})


module.exports = router;