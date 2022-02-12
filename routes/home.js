const express = require('express');
const multer = require('multer');
const path = require('path');

const { Router } = express;
const router = Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../public/img"))
    },
    fileName: (req, file, cb) => {
        cb(null, file.fieldName + "-" + Date.now() + ".jpg")
    }
})

// MIDDLEWARE MULTER
const upload = multer({ storage });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

router.get('/newProduct', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/newProduct.html'))
})

router.post('/newProduct', upload.single('img'), (req, res) => {
    if(req.file){
        console.log("File subido con éxito")
    }
    res.redirect('/')
})

module.exports = router;