const port = 3000 || process.env.PORT;
const app = require('./app');

// app.get('/', (req, res)=>{
//     res.send('Hello');
// });

app.listen(port, ()=> {
    console.log(`Server is up and running on port ${port}`);
})