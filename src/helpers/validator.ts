import moment from "moment";
import { parseJwt } from "./transform";

export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const ZIP_CODE_REGEX = /^\d{6}(?:[-\s]\d{4})?$/;
export const ALPHABET_AND_NUMBER = /^[A-Za-z0-9 ]+$/;
export const ONLY_NUMBER = /^[0-9 ]+$/;
export const ONLY_ALPHABET = /^[A-Za-z ]+$/;
export const ADDRESS_REGEX = /^[A-Za-z0-9 ,.]+$/;
export const VIETNAM_PHONE = /^(849|841|09|01[2|6|8|9])+([0-9]{8})$/;
export const JAPAN_PHONE = /(\d{2,3})\-?(\d{3,4})\-?(\d{4})/;

export const verifyEmail = (value: string): Boolean => EMAIL_REGEX.test(value);

export const verifyPhone = (value: string): Boolean => PHONE_REGEX.test(value);

export const verifyPhoneNumber = (
  value: string | undefined | null
): boolean => {
  if (!value) return false;
  if (value.substring(0, 2) === "81") {
    return JAPAN_PHONE.test(value);
  } else {
    return VIETNAM_PHONE.test(value);
  }
};

export const verifyVietNamPhone = (value: string) => VIETNAM_PHONE.test(value);

export const verifyZipCode = (value: string): Boolean =>
  ZIP_CODE_REGEX.test(value);

export const verifyAlphabetAndNumber = (value: string): Boolean =>
  ALPHABET_AND_NUMBER.test(value);

export const verifyOnlyAlphabet = (value: string): Boolean =>
  ONLY_ALPHABET.test(value);

export const verifyAddress = (value: string): Boolean =>
  ADDRESS_REGEX.test(value);

export const verifyLength = (length: number) => (value: string) => {
  if (value.length >= length) {
    return true;
  }
  return false;
};

export const required = (value: string): Boolean => {
  if (value !== "" && value !== undefined && value !== null) {
    return true;
  }
  return false;
};

export const equalField = (compareValue: string) => (
  value: string
): Boolean => {
  return compareValue === value;
};

export const verifyToken = (value: string | null): boolean => {
  if (value) {
    const parseAutInfo = parseJwt(value);
    if (moment.unix(parseAutInfo.exp).diff(moment()) < 0) {
      return false;
    }
    return true;
  }
  return false;
};
