const express=require('express');
const bodyParser=require('body-parser');
const routerindex=require('./routes/index')
// const cors=require("cors");
var server=express();
server.listen(3000);

server.use( express.static('public'));

server.use(bodyParser.urlencoded({
    extended:false
} ));

server.use("/index",routerindex)