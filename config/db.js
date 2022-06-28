const mongoose = require('mongoose');

const uri = 'mongodb+srv://kimdir:yusufjon@learning.6fyhb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ;


const connectDB = async()=> {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true

    })

}

mongoose.connection.on('connected', ()=>{
    console.log("Bazaga ulandik");
})

module.exports  = connectDB ;