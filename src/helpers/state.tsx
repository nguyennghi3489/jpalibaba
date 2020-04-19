import {
  convertStateFieldToValidatorField,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
} from "helpers";

export const onInputChange = (
  value: string,
  stateName: string,
  component: any
) => {
  const validatorField = stateName + fieldValidatorSuffix;
  const validators = component.state[validatorField];
  if (validators) {
    const validateValue = validators.reduce((result: string, fn: any) => {
      if (typeof fn === "function") {
        return result && fn(value);
      }
      return result && fn[0](component.state[fn[1]])(value);
    }, true);
    if (validateValue) {
      component.setState({
        [stateName + fieldStateSuffix]: FieldValidateStatus.Success,
      });
    } else {
      component.setState({
        [stateName + fieldStateSuffix]: FieldValidateStatus.Fail,
      });
    }
  } else {
    component.setState({
      companyStreet2FState: FieldValidateStatus.Success,
    });
  }
  component.setState({ [stateName]: value });
};

export const isInputValidated = (component: any) => {
  let flag = true;

  const validatingStateFields = getFormStateField(component.state);
  for (const index in validatingStateFields) {
    const obj = validatingStateFields[index];
    const value = Object.values(obj)[0];
    const key = Object.keys(obj)[0];
    const validatorField = convertStateFieldToValidatorField(key);
    const validators = component.state[validatorField];
    if (value !== "0" && validators) {
      component.setState({ [key]: FieldValidateStatus.Fail });
      flag = false;
    }
  }
  return flag;
};
