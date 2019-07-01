"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var socketIo = require("socket.io");
var express = require("express");
var ChatServer = /** @class */ (function () {
    function ChatServer() {
        this.users = [];
        this.connections = [];
        this.initServer();
        this.initConnections();
    }
    ChatServer.prototype.initServer = function () {
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.server.listen(3000);
        this.io = socketIo(this.server);
    };
    ChatServer.prototype.initConnections = function () {
        var _this = this;
        this.io.sockets.on('connection', function (socket) {
            console.log('Connected!');
            _this.connections.push(socket);
            socket.on('disconnect', function (data) {
                console.log('Disconnected!');
                _this.connections.splice(_this.connections.indexOf(socket), 1);
            });
            socket.on('SEND_MESSAGE', function (data) {
                _this.io.emit('ADD_MESSAGE', { name: data.user, message: data.message });
            });
        });
    };
    ChatServer.prototype.startServer = function () {
        return this.app;
    };
    return ChatServer;
}());
exports.ChatServer = ChatServer;
