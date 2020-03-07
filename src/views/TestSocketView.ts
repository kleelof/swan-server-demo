import { SocketView } from 'swan-server';
import { Socket } from 'socket.io'; // extend this in SwanServer

export class TestSocketView extends SocketView {
    
    public processRequest = (socket: Socket, data: {}, fn: (data: {}) => {}): void =>{
    }
}