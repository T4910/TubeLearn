import cookie from "universal-cookie"
const cookies = new cookie()
export const setCookie = (key,value)=> cookies.set(key,value)