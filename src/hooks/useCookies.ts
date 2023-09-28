interface Props {
  getCookie: (cookieName: string) => String;
  setCookie: (
    cookieName: string,
    value: string | number,
    expires: number,
    path: string
  ) => void;
  removeCookie: (cookieName: string) => void;
}

const useCookies = (): Props => {
  const getCookie = (cookieName: string): string => {
    const cookie: RegExpMatchArray | null = document.cookie.match(
      `(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`
    );
    return cookie ? decodeURIComponent(String(cookie.pop())) : "";
  };

  const setCookie = (
    cookieName: string,
    value: string | number,
    expires: number = 1,
    path: string = "/"
  ) => {
    const date: Date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    const expiresString = expires ? `expires=${date.toUTCString()};` : "";
    document.cookie = `${cookieName}=${encodeURIComponent(
      value
    )};${expiresString}path=${path};`;
  };

  const removeCookie = (cookieName: string) => {
    document.cookie = `${cookieName}=;`;
  };

  return { getCookie, setCookie, removeCookie };
};

export default useCookies;
