"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server");
var app = new server_1.ChatServer().startServer();
exports.app = app;
