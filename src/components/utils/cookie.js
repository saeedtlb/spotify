export const setCookie = (c_name, c_value, minutes = 60) => {
    const hour = minutes * 60 * 1000;
    let date = new Date(Date.now() + hour);
    date = date.toUTCString();
    document.cookie = `${c_name}=${c_value}; expires=${date}; path=/`;
};

export const getCookie = c_name => {
    const cookie = decodeURIComponent(document.cookie).split(';');
    const regex = new RegExp(c_name, 'g');
    const find = cookie.filter(c => c.match(regex))[0];
    if (find) {
        return find.split('=')[1];
    } else {
        return '';
    }
};

export const deleteCookie = c_name => setCookie(c_name, '', 0);
