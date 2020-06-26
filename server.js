const express = require("express");

//import router

const server = express();

server.use(express.json());
//userouter

module.exports = server;
