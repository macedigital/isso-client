export const ago = (date) => {
    if (!(date && date.getTime)) {
        return '';
    }
    const secs = Math.max((Date.now() - date.getTime()) / 1000, 0);

    if (secs <= 45) { return 'right now'; }
    if (secs <= 90) { return 'a minute ago'; }

    const mins = Math.floor(secs / 60);

    if (mins <= 45) { return `${mins} minutes ago`; }
    if (mins <= 90) { return 'an hour ago'; }

    const hours = Math.floor(mins / 60);

    if (hours <= 22) { return `${hours} hours ago`; }
    if (hours <= 36) { return 'yesterday'; }

    const days = Math.floor(hours / 24);

    if (days <= 5) { return 'last week'; }
    if (days <= 21) { return `${Math.floor(days / 7)} weeks ago`; }
    if (days <= 45) { return 'last month'; }
    if (days <= 345) { return `${Math.floor(days / 30)} months ago`; }
    if (days <= 547) { return 'last year'; }

    return `${Math.floor(days / 365.25)} years ago`;
};