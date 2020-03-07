import { ISocketView } from 'swan-server';
import { Socket, Server } from 'socket.io';

interface IMessageData {
    message: string
}

export class SocketMessageView implements ISocketView {
    
    public processRequest = (socket: Socket, data: IMessageData, io: Server): void =>{
        io.emit('message', {
            sender: socket['username'],
            message: data.message
        });   
    }
}

interface LoginData {
    username: string
}

export class SocketLoginView implements ISocketView {
    
    public processRequest = (socket: Socket, data: LoginData, io: Server): void =>{
        socket['username'] = data.username;
        io.emit('server_message', {message: `${data.username} has joined the chat.`});
        socket.emit('logged_in');
    }
}