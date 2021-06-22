const express = require("express");
const { copyFileSync } = require("fs");
const path = require("path");
require('dotenv').config();

//app de express
const app = express();

//node Server
const server = require('http').createServer(app);
const io = require("socket.io")(server)
module.exports ={io};
//requerimos el io server para usarlo
require('./sockets/sockets');


const publicPath  = path.resolve(__dirname,'public')

//El archivo html tiene que tener el mismo nombre que el server
app.use(express.static(publicPath));

server.listen(process.env.PORT,(err)=>{
    if(err)throw new Error
    console.log("servidor listo en el puerto "+process.env.PORT)
})