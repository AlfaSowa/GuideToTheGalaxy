import { SetCookieType } from "./interfaces";

export const setCookie = ({ name, value, days = 365 }: SetCookieType): void => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${
    encodeURIComponent(value) || ""
  }${expires}; path=/`;
};

export const getCookie = (name: string, cookies: string): string | null => {
  const nameEQ = `${name}=`;
  const ca = cookies.split(";");
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = decodeURIComponent(ca[i]);
    while (c.startsWith(" ")) c = c.substring(1, c.length);
    if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name: string): void => {
  const date = new Date();

  // Set it expire in -1 days
  date.setTime(date.getTime() + -1 * 24 * 60 * 60 * 1000);

  // Set it
  document.cookie = `${name}=; expires=${date.toUTCString()}; path=/`;
};
