import { getCommentCounts } from './api';

const elements = new Map();
const domElements = document.querySelectorAll('a[href$="#isso-thread"],a[data-isso-id]');
const cleanerRegexp = new RegExp(/^.*\/\/[^/]+/);

for (const link of domElements) {
    let tid = null;

    if (link.dataset.issoId) {
        tid = link.dataset.issoId.replace(cleanerRegexp, '');
    } else {
        const matchResult = link.href.match(/^(.+)#isso-thread$/);
        if (matchResult !== null) {
            tid = matchResult[1].replace(cleanerRegexp, '');
        }
    }

    if (tid !== null) {
        if (elements.has(tid)) {
            elements.get(tid).push(link);
        } else {
            elements.set(tid, [link]);
        }
    }
}

if (elements.size) {
    const urls = Array.from(elements.keys());

    getCommentCounts(urls).then(counts => counts.forEach((count, index) => {
        const content = count ? `${count} comment(s)` : 'No comments';
        elements.get(urls[index]).forEach(link => {
            link.textContent = content;
        });
    }));
}

