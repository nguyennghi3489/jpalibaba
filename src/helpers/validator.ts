export const verifyEmail = (value: string): Boolean => {
  var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRex.test(value)) {
    return true;
  }
  return false;
};

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
