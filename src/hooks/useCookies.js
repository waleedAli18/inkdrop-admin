const useCookies = () => {
    const getCookie = (cookieName) => {
        const cookie = document.cookie.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`);
        return cookie ? decodeURIComponent(String(cookie.pop())) : "";
    };
    const setCookie = (cookieName, value, expires = 1, path = "/") => {
        const date = new Date();
        date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
        const expiresString = expires ? `expires=${date.toUTCString()};` : "";
        document.cookie = `${cookieName}=${encodeURIComponent(value)};${expiresString}path=${path};`;
    };
    const removeCookie = (cookieName) => {
        document.cookie = `${cookieName}=;`;
    };
    return { getCookie, setCookie, removeCookie };
};
export default useCookies;
