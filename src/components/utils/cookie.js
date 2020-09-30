export const setCookie = (c_name, c_value) => {
    const d = new Date();
    const exp_date = Date.now() + 60 * 60 * 1000;
    d.setTime(exp_date);
    d.toUTCString();
    document.cookie = `${c_name}=${c_value}; expires=${d}; path=/`;
};

export const getCookie = c_name => {
    const cookie = decodeURIComponent(document.cookie).split(';');
    const regex = new RegExp(c_name, 'g');
    const find = cookie.filter(c => c.match(regex))[0];
    if (find) {
        return find.split('=')[1];
    } else {
        return 'no cookie set';
    }
};
