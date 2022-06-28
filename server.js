const express = require("express");

const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
connectDB();


app.use('/api', require('./routes/routes'));


app.get('/', (req, res)=>{
    res.send("Hello world")
})


app.listen('5000', ()=> {
    console.log('Server 5000 chi portda ishlayapti')
})