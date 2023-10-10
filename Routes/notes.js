
const express = require('express');
const Router = express.Router();

Router.get('/', (req,res) => {
    console.log(req.body)
    res.send(req.body)
})




module.exports = Router;