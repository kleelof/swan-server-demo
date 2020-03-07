import {TemplateView, Request, Response} from 'swan-server';

interface ISession{
    loadCount: number
}

export class SessionView extends TemplateView {
    public template = 'session.html';

    public render = (request: Request, response: Response) => {
        console.log(request.request['session']);
        if (!request.request['session']['load_count']) request.request['session']['load_count'] = 0;
        request.request['session']['load_count'] ++
        response.render(200, this.getTemplate(), {load_count: request.request['session']['load_count']});
    }
}