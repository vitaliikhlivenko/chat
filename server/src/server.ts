import { createServer, Server } from 'http';

import * as socketIo from 'socket.io';
import * as express from 'express';

interface Message {
    user: string;
    message: string;
}

export class ChatServer {
    private app: express.Application;
    private server: Server;
    private io: SocketIO.Server;
    private users = [];
    private connections = [];

    constructor() {
        this.initServer();
        this.initConnections();
    }

    private initServer(): void {
        this.app = express();
        this.server = createServer(this.app);
        this.server.listen(3000);
        this.io = socketIo(this.server);        
    }

    private initConnections(): void {
        this.io.sockets.on('connection', (socket) => {
            console.log('Connected!');
            this.connections.push(socket);

            socket.on('disconnect', (data) => {
                console.log('Disconnected!');
                this.connections.splice(this.connections.indexOf(socket), 1);
            });

            socket.on('SEND_MESSAGE', (data: Message) => {
                this.io.emit('ADD_MESSAGE', {name: data.user, message: data.message})
            });
        });        
    }

    public startServer(): express.Application {
        return this.app;
    }
}