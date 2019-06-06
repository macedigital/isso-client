import { endpoint } from './config';

const makeUrl = url => new URL(`${endpoint}/${url}`);

const responseHandler = response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
};

export const send = (url, data = {}, method = 'POST') => fetch(makeUrl(url), {
    method,
    mode: 'cors',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(responseHandler);

export const receive = url => fetch(makeUrl(url)).then(responseHandler);

export const count = urls => send('count', urls);
export const create = (uri, data) => send(`new?uri=${uri}`, data);
export const modify = (id, data) => send(`id/${id}`, data, 'PUT');
export const load = (uri, plain = 0, opts) => receive(`?${new URLSearchParams({uri, plain, ...opts})}`);
export const remove = id => send(`id/${id}`, null, 'DELETE');
export const view = (id, plain = 0) => receive(`id/${id}?plain=${plain}`);
export const like = id => send(`id/${id}/like`, null, 'POST');
export const dislike = id => send(`id/${id}/dislike`, null, 'POST');
export const feed = uri => receive(`feed?uri=${uri}`);
export const preview = (text) => send('preview', {text: text}, 'POST');
