export const fieldStateSuffix = "FState";
export const fieldValidatorSuffix = "FValidator";
export enum FieldValidateStatus {
  Success,
  Fail,
  Undefined,
}

export const getFormField = (
  state: Record<string, string>
): Array<Record<string, string>> =>
  Object.keys(state)
    .filter((item) => item.includes(fieldStateSuffix))
    .map((item) => item.replace(fieldStateSuffix, ""))
    .map((item) => ({
      [item]: state[item],
    }));

export const getFormStateField = (
  state: Record<string, string>
): Array<Record<string, string>> =>
  Object.keys(state)
    .filter((item) => item.includes(fieldStateSuffix))
    .map((item) => ({
      [item]: state[item],
    }));

export const convertStateFieldToValidatorField = (input: string) =>
  input.replace(fieldStateSuffix, fieldValidatorSuffix);
