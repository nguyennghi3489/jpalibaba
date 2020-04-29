import React from "react";
import {
  required,
  isInputValidated,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
  onInputChange,
  equalField,
  convertStateFieldToValidatorField,
} from "helpers";

export default class FormInputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      validState: FieldValidateStatus.Undefined,
    };
  }

  change = (value) => {
    const { validators } = this.props;
    if (validators) {
      const validateValue = validators.reduce((result, fn) => {
        if (typeof fn === "function") {
          return result && fn(value);
        }
        return result && fn[0](this.state[fn[1]])(value);
      }, true);

      if (validateValue) {
        this.setState({
          validState: FieldValidateStatus.Success,
        });
      } else {
        this.setState({
          validState: FieldValidateStatus.Fail,
        });
      }
    } else {
      this.setState({
        validState: FieldValidateStatus.Success,
      });
    }
    this.setState({ value: value });
  };

  //   isValidated = () => {
  //     let flag = true;

  //     const validatingStateFields = getFormStateField(this.state);
  //     for (const index in validatingStateFields) {
  //       const obj = validatingStateFields[index];
  //       const value = Object.values(obj)[0];
  //       const key = Object.keys(obj)[0];
  //       const validatorField = convertStateFieldToValidatorField(key);
  //       const validators = this.state[validatorField];
  //       if (value !== FieldValidateStatus.Success && validators) {
  //         this.setState({ [key]: FieldValidateStatus.Fail });
  //         flag = false;
  //       }
  //     }
  //     return flag;
  //   };

  render() {
    return (
      <CustomInput
        success={this.state.companyNameFState === FieldValidateStatus.Success}
        error={this.state.companyNameFState === FieldValidateStatus.Fail}
        labelText={
          <span>
            Company Name <small>(required)</small>
          </span>
        }
        id="companyName"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          onChange: (event) => this.change(event.target.value),
        }}
      />
    );
  }
}
