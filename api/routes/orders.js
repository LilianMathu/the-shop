const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "get all orders"
    });
});

router.post('/', (req, res, next)=>{
    const order = {
        name: req.body.name,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: "order was created",
        newOrder: order
    });
});

router.get('/:orderId', (req, res, next)=>{
    const id = req.params.orderId;
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

router.patch('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: "order updated successfully"
    });
});

router.delete('/:orderId', (req, res, next)=>{
    res.status(200).json({
        message: "order deleted successfully"
    });
});

module.exports = router;
