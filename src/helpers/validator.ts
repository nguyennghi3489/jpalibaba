export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const PHONE_REGEX = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
export const ZIP_CODE_REGEX = /^\d{6}(?:[-\s]\d{4})?$/;
export const ALPHABET_AND_NUMBER = /^[A-Za-z0-9 ]+$/;
export const ONLY_ALPHABET = /^[A-Za-z ]+$/;

export const verifyEmail = (value: string): Boolean =>
  EMAIL_REGEX.test(value) ? true : false;

export const verifyPhone = (value: string): Boolean =>
  PHONE_REGEX.test(value) ? true : false;

export const verifyZipCode = (value: string): Boolean =>
  ZIP_CODE_REGEX.test(value) ? true : false;

export const verifyAlphabetAndNumber = (value: string): Boolean =>
  ALPHABET_AND_NUMBER.test(value) ? true : false;

export const verifyOnlyAlphabet = (value: string): Boolean =>
  ONLY_ALPHABET.test(value);

export const verifyLength = (value: string, length: number) => {
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
