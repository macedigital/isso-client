const getEndpoint = () => {
    const scriptElement = document.querySelector('script[data-isso]');

    if (scriptElement !== null) {
        return scriptElement.dataset.isso;
    }

    if (document.currentScript !== null) {
        return document.currentScript.dataset.isso || (`//${new URL(document.currentScript.src)}/`);
    }
};

export const endpoint = getEndpoint();
export const target = document.getElementById('isso-thread');
export const isso = Object.assign({}, document.currentScript.dataset, target.dataset);
export const title = target.dataset.issoTitle;
export const locale = target.dataset.lang || 'en';
