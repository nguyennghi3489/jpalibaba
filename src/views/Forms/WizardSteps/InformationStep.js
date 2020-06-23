import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {
  convertStateFieldToValidatorField,
  verifyEmail,
  required,
  equalField,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
} from "helpers";

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

class InformationStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enterpriseNumber: "",
      ["enterpriseNumber" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["enterpriseNumber" + fieldValidatorSuffix]: [required],
      enterpriseName: "",
      ["enterpriseName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["enterpriseName" + fieldValidatorSuffix]: [required],
      password: "",
      ["password" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["password" + fieldValidatorSuffix]: [required],
      confirmPassword: "",
      ["confirmPassword" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["confirmPassword" + fieldValidatorSuffix]: [
        required,
        [equalField, "password"],
      ],
      registrationNumber: "",
      ["registrationNumber" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["registrationNumber" + fieldValidatorSuffix]: [required],
      personInCharge: "",
      ["personInCharge" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["personInCharge" + fieldValidatorSuffix]: [required],
      email: "",
      ["email" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["email" + fieldValidatorSuffix]: [verifyEmail],
    };
  }
  sendState() {
    return this.state;
  }

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
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <GridContainer>
            <GridItem xs={12} sm={12}>
              <h4 className={classes.infoText}>Company information</h4>
            </GridItem>
            <GridItem xs={12} sm={12}>
              <CustomInput
                success={
                  this.state.enterpriseNumberFState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.enterpriseNumberFState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Enterprise Number <small>(required)</small>
                  </span>
                }
                id="enterpriseNumber"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  value: this.state.enterpriseNumber,
                  onChange: (event) =>
                    this.change(event.target.value, "enterpriseNumber"),
                }}
              />
              <CustomInput
                success={
                  this.state.enterpriseNameFState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.enterpriseNameFState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Enterprise Name <small>(required)</small>
                  </span>
                }
                id="enterpriseName"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "enterpriseName"),
                }}
              />
              <CustomInput
                success={
                  this.state.passwordFState === FieldValidateStatus.Success
                }
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
                  type: "password",
                  onChange: (event) =>
                    this.change(event.target.value, "password"),
                }}
              />
              <CustomInput
                success={
                  this.state.confirmPasswordFState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.confirmPasswordFState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Password<small>(required)</small>
                  </span>
                }
                id="confirmPassword"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "password",
                  onChange: (event) =>
                    this.change(event.target.value, "confirmPassword"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.registrationNumberFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.registrationNumberFState ===
                      FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Registration Number <small>(required)</small>
                      </span>
                    }
                    id="registrationNumber"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) =>
                        this.change(event.target.value, "registrationNumber"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.personInChargeFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.personInChargeFState ===
                      FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Person in Charge <small>(required)</small>
                      </span>
                    }
                    id="personInCharge"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) =>
                        this.change(event.target.value, "personInCharge"),
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <CustomInput
                    success={
                      this.state.emailFState === FieldValidateStatus.Success
                    }
                    error={this.state.emailFState === FieldValidateStatus.Fail}
                    labelText={
                      <span>
                        Company Email <small>(required)</small>
                      </span>
                    }
                    id="email"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      onChange: (event) =>
                        this.change(event.target.value, "email"),
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          className={classes.inputAdornment}
                        >
                          <Email className={classes.inputAdornmentIcon} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    );
  }
}

InformationStep.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(InformationStep);
