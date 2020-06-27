const express = require("express");

//import routers
const resourceRouter = require("./routers/resource");
const projectRouter = require("./routers/project");
const taskRouter = require("./routers/task");

const server = express();

server.use(express.json());

//userouters
server.use(resourceRouter);
server.use(projectRouter);
server.use(taskRouter);

module.exports = server;
