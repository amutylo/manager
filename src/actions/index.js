import { EMAIL_CHANGED } from "./types";

export const emailChnaged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}