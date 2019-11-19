const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Initialize the application
const app = express();  

//Import routes
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Connect to the database
mongoose.connect('mongodb+srv://admin:' + process.env.MONGOATLAS_PWD + 
'@cluster0-zxoir.azure.mongodb.net/test?retryWrites=true&w=majority', 
{useNewUrlParser: true}
);

//mount middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));  //false supports simple bodies
app.use(bodyParser.json());


// Mount the routes

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);


// Handling errors that make it past the '/'
app.use((req, res, next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//handle errors thrown from any part of the application
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
