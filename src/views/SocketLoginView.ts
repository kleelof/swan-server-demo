import { ISocketView } from 'swan-server';
import { Socket, Server } from 'socket.io';

interface IData {
    username: string
}

export class SocketLoginView implements ISocketView {
    
    public processRequest = (socket: Socket, data: IData, io: Server): void =>{
        socket['username'] = data.username;
        io.emit('server_message', {message: `${data.username} has joined the chat.`});
        socket.emit('logged_in');
    }
}