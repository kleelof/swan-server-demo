import { Swan, Route, HTTPRoute, SocketRoute, IServerOptions, ISocketOptions } from 'swan-server';
import { IndexView } from './views/IndexView';
import { SessionView } from './views/SessionView';
import { SocketView } from './views/SocketView';
import { SocketLoginView } from './views/SocketLoginView';
import { SocketMessageView } from './views/SocketMessageView';

const routes: Route[] = [
    new HTTPRoute('/', 'index', new IndexView()),
    new HTTPRoute('/session', 'session', new SessionView()),//remove name from HTTPRoute initializer
    new HTTPRoute('/socket', 'socket', new SocketView()),
    new SocketRoute('login', new SocketLoginView()),
    new SocketRoute('message', new SocketMessageView()) // need to expose IO to views
]

const serverOptions: IServerOptions = {
    sessionOptions: {
        cookieName: `session`,
        secret: 'sflswefweirwrkjf8w08u34rg',
        duration: 24 * 60 * 60 * 1000,
        activeDuration: 1000 * 60 * 5
    },
    PORT: 3000 
}

const socketOptions: ISocketOptions = { // update config so origins can be set
    PORT: 2222
} 

const swan = new Swan(routes, serverOptions, socketOptions);
swan.start()
.then(() => {
    console.log('Server is Running')
})
.catch(err => {
    console.error(`Unable to start game: ${err}`);
})