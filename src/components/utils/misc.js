export const format_seconds = seconds =>
    Math.floor(seconds / 60) + ':' + ('0' + Math.floor(seconds % 60)).slice(-2);

export const show_date = date => date.slice(0, date.indexOf('T'));
