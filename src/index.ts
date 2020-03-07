import { Swan, Route, HTTPRoute, SocketRoute, ISocketOptions } from 'swan-server';
import { IndexView } from './views/IndexView';
import { SessionView } from './views/SessionView';
import { SocketView } from './views/SocketView';
import { SocketMessageView, SocketLoginView } from './views/SocketMessageView';

const swan = new Swan();

/* Swan has an HTTP server and a socket server. You can use either one or both */

/* Start HTTP Server */
const HTTPRoutes: HTTPRoute[] = [
    new HTTPRoute('/', 'index', new IndexView()),
    new HTTPRoute('/session', 'session', new SessionView()),//remove name from HTTPRoute initializer
    new HTTPRoute('/socket', 'socket', new SocketView())
]
swan.startHTTPServer({
    routes: HTTPRoutes,
    sessionOptions: {
        cookieName: `session`,
        secret: 'sflswefweirwrkjf8w08u34rg',
        duration: 24 * 60 * 60 * 1000,
        activeDuration: 1000 * 60 * 5
    },
    PORT: 3000 
})
.catch(err => {
    console.error(`Unable to start  HTTP server: ${err}`);
})

/* Start Socket Server */
const socketRoutes: SocketRoute[] = [
    new SocketRoute('login', new SocketLoginView()),
    new SocketRoute('message', new SocketMessageView())
]
const socketOptions: ISocketOptions = {
    routes: socketRoutes,
    origins: "*:*",
    PORT: 2222
} 

swan.startSocketServer(socketOptions)
    .catch(err => {
        console.error(`Unable to start socket server: ${err}`);
    })
