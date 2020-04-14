const express = require('express');
const connectDB = require('./config/db')

const app = express();

//conncet
connectDB();

app.get('/',(req,res)=>res.json({msg:'Welcome to contact manger Home page'}));



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));