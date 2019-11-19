const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


//import the database models
const Product = require('../models/productModel');


router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "get /products",

    });
});

router.post('/', (req, res, next)=>{
    const product = new Product ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => console.log(result))
        .catch(error => console.log(error)); 
    res.status(201).json({
        message: "product was created",
        newProduct: product
    });
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if (id === '1') {
        res.status(200).json({
            message: "you discovered the id",
            id
        });
    } else {
        res.status(200).json({
            message: "The id is incorrect"
        });
    }
});

router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: "product updated successfully"
    });
});

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message: "product deleted successfully"
    });
});


module.exports = router;
