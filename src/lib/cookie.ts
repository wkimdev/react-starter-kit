import Cookies from "universal-cookie";

const cookies = new Cookies();

export function getCookie(name: string): string | undefined {
  return cookies.get(name);
}

export function setCookie(
  name: string,
  value: string,
  options?: { path?: string; maxAge?: number; secure?: boolean },
): void {
  cookies.set(name, value, {
    path: "/",
    ...options,
  });
}

export function removeCookie(name: string, path = "/"): void {
  cookies.remove(name, { path });
}
