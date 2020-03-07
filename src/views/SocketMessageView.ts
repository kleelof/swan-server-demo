import { SocketView } from 'swan-server';
import { Socket } from 'socket.io'; // extend this in SwanServer
import io from 'socket.io';

interface IData {
    message: string
}

export class SocketMessageView extends SocketView {
    
    public processRequest = (socket: Socket, data: IData, fn: (data: {}) => {}): void =>{
        socket.emit('message', {
            sender: socket['username'],
            message: data.message
        });
        
    }
}