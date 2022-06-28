const express = require('express');

const Products = require('../models/products');
const router = express.Router();

router.route('/products').get((req, res)=>{
    Products.find()
        .then(products => res.json(products))
        .catch(err => res.status(400).json("error" + err));
});

router.route('/products/add').post( async (req, res) => {
    const name = req.body.name;
    const category = req.body.category;
    const price = req.body.price;

    const product = new Products({name , category, price});
    
    await product.save().
    then(()=> res.json("Yangi maxsulot qushildi") )
    .catch((err) => res.status(400).json("Error" + err))

});


    router.route('/products/:id').get( async (req, res)=> {
        await Products.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).send("error" + err))
    })

router.route('/products/:id').delete( async (req, res)=>{

   await Products.findByIdAndDelete(req.params.id)
    .then(() => res.json("product has been deleted"))
    .catch(err =>res.status(400).send("err" + err) )
})


router.route('/products/:id').put( async(req, res)=>{
    
    await Products.findByIdAndUpdate(req.params.id)
    .then(product => {
        product.name = req.body.name;
        product.category = req.body.category;
        product.price  = req.body.price;

        product.save()
        .then(()=> res.send("product has been updated"))
        .catch(err => res.status(400).send(err))
        
    })
    .catch(err => res.status(400).send('err'+ err))
})

module.exports = router;