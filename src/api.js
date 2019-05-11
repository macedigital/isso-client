import { endpoint } from './config';

const responseHandler = response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
};

export const send = (url, data = {}, method = 'POST') => fetch(url, {
    method,
    mode: 'cors',
    credentials: 'omit',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
}).then(responseHandler);

export const getCommentCounts = urls => send(new URL(`${endpoint}/count`), urls);
