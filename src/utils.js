function zeroPadded(number) {
    return number >= 10 ? number.toString() : `0${number}`;
}

function lastDigit(number) {
    return number.toString()[number.toString().length - 1];
}

export function formatTime(milliseconds) {
    const dd = zeroPadded( Math.floor(milliseconds / (24 * 60 * 60 * 1000))); // days
    const hh = zeroPadded(Math.floor((milliseconds / (1000 * 60 * 60)) % 24)); // hours
    const mm = zeroPadded(Math.floor(((milliseconds / (1000 * 60)) % 60))); // minutes
    const ss = zeroPadded(Math.floor(milliseconds / 1000) % 60); // seconds
    const t = lastDigit(Math.floor(milliseconds / 100)); // milliseconds
    return `${dd}:${hh}:${mm}:${ss}.${t}`;
}
