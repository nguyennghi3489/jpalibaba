import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {
  required,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
  equalField,
  verifyEmail,
  convertStateFieldToValidatorField,
  verifyOnlyAlphabet,
  verifyLength,
} from "helpers";
import { DEFAULT_MAX_LENGTH } from "constant";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  inputAdornment: {
    position: "relative",
  },
};

class ClientInformationStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      ["firstName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["firstName" + fieldValidatorSuffix]: [required, verifyOnlyAlphabet],
      lastName: "",
      ["lastName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["lastName" + fieldValidatorSuffix]: [required, verifyOnlyAlphabet],
      email: "",
      ["email" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["email" + fieldValidatorSuffix]: [required, verifyEmail],
      password: "",
      ["password" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["password" + fieldValidatorSuffix]: [required, verifyLength(8)],
      confirmPassword: "",
      ["confirmPassword" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["confirmPassword" + fieldValidatorSuffix]: [
        required,
        [equalField, "password"],
      ],
      registrationFile: "",
    };
  }
  sendState() {
    return this.state;
  }

  fileChange = (value, stateName) => {
    this.setState({ [stateName]: value.target.files[0] });
  };

  change = (value, stateName) => {
    const validatorField = stateName + fieldValidatorSuffix;
    const validators = this.state[validatorField];
    if (validators) {
      const validateValue = validators.reduce((result, fn) => {
        if (typeof fn === "function") {
          return result && fn(value);
        }
        return result && fn[0](this.state[fn[1]])(value);
      }, true);
      if (validateValue) {
        this.setState({
          [stateName + fieldStateSuffix]: FieldValidateStatus.Success,
        });
      } else {
        this.setState({
          [stateName + fieldStateSuffix]: FieldValidateStatus.Fail,
        });
      }
    } else {
      this.setState({
        companyStreet2FState: FieldValidateStatus.Success,
      });
    }
    this.setState({ [stateName]: value });
  };

  isValidated = () => {
    let flag = true;

    const validatingStateFields = getFormStateField(this.state);
    for (const index in validatingStateFields) {
      const obj = validatingStateFields[index];
      const value = Object.values(obj)[0];
      const key = Object.keys(obj)[0];
      const validatorField = convertStateFieldToValidatorField(key);
      const validators = this.state[validatorField];
      if (value !== FieldValidateStatus.Success && validators) {
        this.setState({ [key]: FieldValidateStatus.Fail });
        flag = false;
      }
    }
    return flag;
  };

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Update your information</h4>
        </GridItem>
        <GridItem xs={12} sm={8}>
          <div>
            <CustomInput
              success={
                this.state.firstNameFState === FieldValidateStatus.Success
              }
              error={this.state.firstNameFState === FieldValidateStatus.Fail}
              labelText={
                <span>
                  First Name <small>(required)</small>
                </span>
              }
              id="firstName"
              formControlProps={{
                fullWidth: true,
              }}
              maxLength="20"
              inputProps={{
                inputProps: {
                  maxLength: DEFAULT_MAX_LENGTH,
                },
                onChange: (event) =>
                  this.change(event.target.value, "firstName"),
              }}
            />
          </div>
          <CustomInput
            success={this.state.lastNameFState === FieldValidateStatus.Success}
            error={this.state.lastNameFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Last Name <small>(required)</small>
              </span>
            }
            id="lastName"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              inputProps: {
                maxLength: DEFAULT_MAX_LENGTH,
              },
              onChange: (event) => this.change(event.target.value, "lastName"),
            }}
          />
          <CustomInput
            success={this.state.emailFState === FieldValidateStatus.Success}
            error={this.state.emailFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Email<small>(required)</small>
              </span>
            }
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              inputProps: {
                maxLength: DEFAULT_MAX_LENGTH,
              },
              onChange: (event) => this.change(event.target.value, "email"),
            }}
          />
          <CustomInput
            success={this.state.passwordFState === FieldValidateStatus.Success}
            error={this.state.passwordFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Password<small>(required)</small>
              </span>
            }
            id="password"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              inputProps: {
                maxLength: DEFAULT_MAX_LENGTH,
              },
              type: "password",
              onChange: (event) => this.change(event.target.value, "password"),
            }}
          />

          <CustomInput
            success={
              this.state.confirmPasswordFState === FieldValidateStatus.Success
            }
            error={
              this.state.confirmPasswordFState === FieldValidateStatus.Fail
            }
            labelText={
              <span>
                Confirm Password<small>(required)</small>
              </span>
            }
            id="confirmPassword"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              inputProps: {
                maxLength: DEFAULT_MAX_LENGTH,
              },
              type: "password",
              onChange: (event) =>
                this.change(event.target.value, "confirmPassword"),
            }}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

ClientInformationStep.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(ClientInformationStep);
