import express from 'express';
import cors from 'cors';
import * as io from 'socket.io';
import http from 'http';
import socketController from '../sockets/controller.js';

class Server{
    constructor(){
        this.app=express();
        this.server = http.createServer(this.app)
        this.io = new io.Server(this.server)
        this.port=process.env.PORT;
        this.sockets();
        this.middlewares();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'))
    }

    sockets(){
        this.io.on('connection', socketController);
    }

    listen(){
        this.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}
export default Server 