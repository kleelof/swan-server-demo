import { SocketView } from 'swan-server';
import { Socket } from 'socket.io'; // extend this in SwanServer

interface IData {
    username: string
}

export class SocketLoginView extends SocketView {
    
    public processRequest = (socket: Socket, data: IData, fn: (data: {}) => {}): void =>{
        socket['username'] = data.username;
        socket.broadcast.emit('server_message', {message: `${data.username} has joined the chat.`});
        socket.emit('logged_in');
    }
}