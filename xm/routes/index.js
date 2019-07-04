const express=require('express');
const pool=require('../pool.js');

var router=express.Router();

router.get('/',(req,res)=>{
    pool.query('SELECT * FROM kkimg',(err,result)=>{
        if(err){console.log(err)}
        res.send(result);
    })
})

module.exports=router;