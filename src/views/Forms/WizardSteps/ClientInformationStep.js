import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

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

class ClientInformationStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      ["companyName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["companyName" + fieldValidatorSuffix]: [required],
      representativeName: "",
      ["representativeName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["representativeName" + fieldValidatorSuffix]: [required],
      enterpriseNumber: "",
      ["enterpriseNumber" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["enterpriseNumber" + fieldValidatorSuffix]: [required],
      contactPersonFirstName: "",
      ["contactPersonFirstName" +
      fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["contactPersonFirstName" + fieldValidatorSuffix]: [required],
      contactPersonLastName: "",
      ["contactPersonLastName" +
      fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["contactPersonLastName" + fieldValidatorSuffix]: [required],
      contactEmail: "",
      ["contactEmail" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["contactEmail" + fieldValidatorSuffix]: [required, verifyEmail],
      contactTel: "",
      ["contactTel" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["contactTel" + fieldValidatorSuffix]: [required],
      password: "",
      ["password" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["password" + fieldValidatorSuffix]: [required],
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
                this.state.companyNameFState === FieldValidateStatus.Success
              }
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
                onChange: (event) =>
                  this.change(event.target.value, "companyName"),
              }}
            />
          </div>
          <CustomInput
            success={
              this.state.representativeNameFState ===
              FieldValidateStatus.Success
            }
            error={
              this.state.representativeNameFState === FieldValidateStatus.Fail
            }
            labelText={
              <span>
                Name of Representative Name <small>(required)</small>
              </span>
            }
            id="representativeName"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) =>
                this.change(event.target.value, "representativeName"),
            }}
          />
          <GridContainer justify="center">
            <GridItem xs={12} sm={12}>
              <span
                style={{
                  paddingRight: "8px",
                }}
              >
                Registration File
              </span>
              <CustomInput
                labelText={""}
                id="registrationFile"
                formControlProps={{
                  fullWidth: false,
                }}
                inputProps={{
                  type: "file",
                  onChange: (event) =>
                    this.fileChange(event, "registrationFile"),
                }}
              />
            </GridItem>
          </GridContainer>
          <CustomInput
            success={
              this.state.enterpriseNumberFState === FieldValidateStatus.Success
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
              onChange: (event) =>
                this.change(event.target.value, "enterpriseNumber"),
            }}
          />
          <CustomInput
            success={
              this.state.contactPersonFirstNameFState ===
              FieldValidateStatus.Success
            }
            error={
              this.state.contactPersonFirstNameFState ===
              FieldValidateStatus.Fail
            }
            labelText={
              <span>
                Contact Person First Name<small>(required)</small>
              </span>
            }
            id="contactPersonFirstName"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) =>
                this.change(event.target.value, "contactPersonFirstName"),
            }}
          />
          <CustomInput
            success={
              this.state.contactPersonLastNameFState ===
              FieldValidateStatus.Success
            }
            error={
              this.state.contactPersonLastNameFState ===
              FieldValidateStatus.Fail
            }
            labelText={
              <span>
                Contact Person Last Name<small>(required)</small>
              </span>
            }
            id="contactPersonLastName"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) =>
                this.change(event.target.value, "contactPersonLastName"),
            }}
          />

          <CustomInput
            success={
              this.state.contactEmailFState === FieldValidateStatus.Success
            }
            error={this.state.contactEmailFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Contact Email<small>(required)</small>
              </span>
            }
            id="contactEmail"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) =>
                this.change(event.target.value, "contactEmail"),
            }}
          />
          <CustomInput
            success={
              this.state.contactTelFState === FieldValidateStatus.Success
            }
            error={this.state.contactTelFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Contact Tel<small>(required)</small>
              </span>
            }
            id="contactTel"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) =>
                this.change(event.target.value, "contactTel"),
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
