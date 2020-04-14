import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clientSignup } from "actions";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {
  convertStateFieldToValidatorField,
  required,
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

class ClientInformationStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyStreet1: "",
      ["companyStreet1" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["companyStreet1" + fieldValidatorSuffix]: [required],
      companyStreet2: "",
      ["companyStreet2" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      companyCountry: "",
      ["companyCountry" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["companyCountry" + fieldValidatorSuffix]: [required],
      companyCity: "",
      ["companyCity" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["companyCity" + fieldValidatorSuffix]: [required],
      companyPostalCode: "",
      ["companyPostalCode" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["companyPostalCode" + fieldValidatorSuffix]: [required],
      shippingStreet1: "",
      ["shippingStreet1" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["shippingStreet1" + fieldValidatorSuffix]: [required],
      shippingStreet2: "",
      ["shippingStreet2" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      shippingCountry: "",
      ["shippingCountry" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["shippingCountry" + fieldValidatorSuffix]: [required],
      shippingCity: "",
      ["shippingCity" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["shippingCity" + fieldValidatorSuffix]: [required],
      shippingPostalCode: "",
      ["shippingPostalCode" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["shippingPostalCode" + fieldValidatorSuffix]: [required],
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
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <h4>Company Address</h4>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <CustomInput
                success={
                  this.state.companyStreet1FState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.companyStreet1FState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Company Street 1 <small>(required)</small>
                  </span>
                }
                id="companyStreet1"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "companyStreet1"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <CustomInput
                success={
                  this.state.companyStreet2FState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.companyStreet2FState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Company Street 2 <small>(required)</small>
                  </span>
                }
                id="companyStreet2"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "companyStreet2"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={
                  this.state.companyCountryFState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.companyCountryFState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Company Country <small>(required)</small>
                  </span>
                }
                id="companyCountry"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "companyCountry"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={
                  this.state.companyCityFState === FieldValidateStatus.Success
                }
                error={
                  this.state.companyCityFState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Company City <small>(required)</small>
                  </span>
                }
                id="companyCity"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "companyCity"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={
                  this.state.companyPostalCodeFState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.companyPostalCodeFState ===
                  FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Company Postal Code <small>(required)</small>
                  </span>
                }
                id="companyPostalCode"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "companyPostalCode"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <Box mt={5}>
                <h4>Shipping Address</h4>
              </Box>
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <CustomInput
                success={
                  this.state.shippingStreet1FState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.shippingStreet1FState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Shipping Street 1 <small>(required)</small>
                  </span>
                }
                id="shippingStreet1"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "shippingStreet1"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <CustomInput
                success={
                  this.state.shippingStreet2FState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.shippingStreet2FState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Shipping Street 2 <small>(required)</small>
                  </span>
                }
                id="shippingStreet2"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "shippingStreet2"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={
                  this.state.shippingCountryFState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.shippingCountryFState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Shipping Country <small>(required)</small>
                  </span>
                }
                id="shippingCountry"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "shippingCountry"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={
                  this.state.shippingCityFState === FieldValidateStatus.Success
                }
                error={
                  this.state.shippingCityFState === FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Shipping City <small>(required)</small>
                  </span>
                }
                id="shippingCity"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "shippingCity"),
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={
                  this.state.shippingPostalCodeFState ===
                  FieldValidateStatus.Success
                }
                error={
                  this.state.shippingPostalCodeFState ===
                  FieldValidateStatus.Fail
                }
                labelText={
                  <span>
                    Shipping Postal Code <small>(required)</small>
                  </span>
                }
                id="shippingPostalCode"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) =>
                    this.change(event.target.value, "shippingPostalCode"),
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    );
  }
}

ClientInformationStep.propTypes = {
  classes: PropTypes.object,
};

export default connect(
  null,
  { clientSignup }
)(withStyles(style)(ClientInformationStep));
