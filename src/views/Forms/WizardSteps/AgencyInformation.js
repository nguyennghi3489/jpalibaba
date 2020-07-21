import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clientSignup } from "provider/actions";

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
  verifyEmail,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
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
      name: "",
      ["name" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["name" + fieldValidatorSuffix]: [required],
      representativeName: "",
      ["representativeName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["representativeName" + fieldValidatorSuffix]: [required],
      email: "",
      ["email" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["email" + fieldValidatorSuffix]: [required, verifyEmail],
      enterpriseNumber: "",
      ["enterpriseNumber" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["enterpriseNumber" + fieldValidatorSuffix]: [required],
      phone: "",
      ["phone" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["phone" + fieldValidatorSuffix]: [required],
      country: "",
      ["country" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["country" + fieldValidatorSuffix]: [required],
      address: "",
      ["address" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["address" + fieldValidatorSuffix]: [required],
      city: "",
      ["city" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["city" + fieldValidatorSuffix]: [required],
      zipCode: "",
      ["zipCode" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["zipCode" + fieldValidatorSuffix]: [required],
      //   city: "",
      //   ["city" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      //   companyCountry: "",
      //   ["companyCountry" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      //   ["companyCountry" + fieldValidatorSuffix]: [required],
      //   companyCity: "",
      //   ["companyCity" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      //   ["companyCity" + fieldValidatorSuffix]: [required],
      //   companyPostalCode: "",
      //   ["companyPostalCode" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      //   ["companyPostalCode" + fieldValidatorSuffix]: [required],

      shippingFirstName: "",
      ["shippingFirstName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["shippingFirstName" + fieldValidatorSuffix]: [required],
      shippingLastName: "",
      ["shippingLastName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["shippingLastName" + fieldValidatorSuffix]: [required],
      shippingPhone: "",
      ["shippingPhone" + fieldStateSuffix]: FieldValidateStatus.Undefined,
      ["shippingPhone" + fieldValidatorSuffix]: [required],

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

  componentDidUpdate(prevProps, prevState) {
    const {
      allStates: { type },
    } = this.props;
    const {
      allStates: { type: prevType },
    } = prevProps;
    if (prevType && prevType.importer === type.importer) return;
    if (type && type.importer) {
      if (this.state.shippingStreet1FValidator) {
        this.setState({
          ["shippingFirstName" + fieldValidatorSuffix]: undefined,
          ["shippingLastName" + fieldValidatorSuffix]: undefined,
          ["shippingPhone" + fieldValidatorSuffix]: undefined,
          ["shippingStreet1" + fieldValidatorSuffix]: undefined,
          ["shippingStreet2" + fieldValidatorSuffix]: undefined,
          ["shippingCountry" + fieldValidatorSuffix]: undefined,
          ["shippingCity" + fieldValidatorSuffix]: undefined,
          ["shippingPostalCode" + fieldValidatorSuffix]: undefined,
        });
      }
    } else {
      if (!this.state.shippingStreet1FValidator) {
        this.setState({
          ["shippingFirstName" + fieldValidatorSuffix]: [required],
          ["shippingLastName" + fieldValidatorSuffix]: [required],
          ["shippingPhone" + fieldValidatorSuffix]: [required],
          ["shippingStreet1" + fieldValidatorSuffix]: [required],
          ["shippingStreet2" + fieldValidatorSuffix]: [required],
          ["shippingCountry" + fieldValidatorSuffix]: [required],
          ["shippingCity" + fieldValidatorSuffix]: [required],
          ["shippingPostalCode" + fieldValidatorSuffix]: [required],
        });
      }
    }
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
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <h4>Agency Information</h4>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.nameFState === FieldValidateStatus.Success
                    }
                    error={this.state.nameFState === FieldValidateStatus.Fail}
                    labelText={
                      <span>
                        Company Name <small>(required)</small>
                      </span>
                    }
                    id="name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "name"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.representativeNameFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.representativeNameFState ===
                      FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Representative Name <small>(required)</small>
                      </span>
                    }
                    id="representativeName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "representativeName"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.emailFState === FieldValidateStatus.Success
                    }
                    error={this.state.emailFState === FieldValidateStatus.Fail}
                    labelText={
                      <span>
                        Email <small>(required)</small>
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
                      onChange: (event) =>
                        this.change(event.target.value, "email"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.enterpriseNumberFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.enterpriseNumberFState ===
                      FieldValidateStatus.Fail
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
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "enterpriseNumber"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.phoneFState === FieldValidateStatus.Success
                    }
                    error={this.state.phoneFState === FieldValidateStatus.Fail}
                    labelText={
                      <span>
                        Phone <small>(required)</small>
                      </span>
                    }
                    id="phone"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "phone"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.countryFState === FieldValidateStatus.Success
                    }
                    error={
                      this.state.countryFState === FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Country <small>(required)</small>
                      </span>
                    }
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "country"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.addressFState === FieldValidateStatus.Success
                    }
                    error={
                      this.state.addressFState === FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Address <small>(required)</small>
                      </span>
                    }
                    id="address"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "address"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.cityFState === FieldValidateStatus.Success
                    }
                    error={this.state.cityFState === FieldValidateStatus.Fail}
                    labelText={
                      <span>
                        City <small>(required)</small>
                      </span>
                    }
                    id="city"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "city"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.zipCodeFState === FieldValidateStatus.Success
                    }
                    error={
                      this.state.zipCodeFState === FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Zip Code <small>(required)</small>
                      </span>
                    }
                    id="zipCode"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "zipCode"),
                    }}
                  />
                </GridItem>
              </GridContainer>
              {/* )} */}
            </GridItem>

            {this.state.shippingStreet1FValidator && (
              <>
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Box mt={5}>
                    <h4>Shipping Address</h4>
                  </Box>
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.shippingFirstNameFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.shippingFirstNameFState ===
                      FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        First Name <small>(required)</small>
                      </span>
                    }
                    id="shippingFirstName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "shippingFirstName"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.shippingLastNameFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.shippingLastNameFState ===
                      FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Last Name<small>(required)</small>
                      </span>
                    }
                    id="shippingLastName"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "shippingLastName"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.shippingPhoneFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.shippingPhoneFState ===
                      FieldValidateStatus.Fail
                    }
                    labelText={
                      <span>
                        Phone<small>(required)</small>
                      </span>
                    }
                    id="shippingPhone"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "shippingPhone"),
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.shippingStreet1FState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.shippingStreet1FState ===
                      FieldValidateStatus.Fail
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
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
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
                      this.state.shippingStreet2FState ===
                      FieldValidateStatus.Fail
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
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "shippingStreet2"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.shippingCountryFState ===
                      FieldValidateStatus.Success
                    }
                    error={
                      this.state.shippingCountryFState ===
                      FieldValidateStatus.Fail
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
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "shippingCountry"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
                  <CustomInput
                    success={
                      this.state.shippingCityFState ===
                      FieldValidateStatus.Success
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
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "shippingCity"),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6} lg={6}>
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
                      inputProps: {
                        maxLength: DEFAULT_MAX_LENGTH,
                      },
                      onChange: (event) =>
                        this.change(event.target.value, "shippingPostalCode"),
                    }}
                  />
                </GridItem>
              </>
            )}
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
