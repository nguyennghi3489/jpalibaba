import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "react-phone-input-2/lib/style.css";
import { clientSignup } from "provider/actions";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
  convertAllToString,
} from "helpers";
import { ADDRESS_MAX_LENGTH } from "constant";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import { FInput } from "components/Form/FInput";
import { Formik, Form } from "formik";
import { FSelect } from "components/Form/FSelect";
import { FCountryPhone } from "components/Form/FCountryPhone";
import {
  agencyValidationObject,
  addressValidationObject,
  signupInitialValue,
} from "provider/models";

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
  countryDropDown: {
    marginTop: "11px",
  },
  ...styles,
};

const options = [
  { value: "vietnam", label: "Viet Nam" },
  { value: "japan", label: "Japan" },
];

class ClientInformationStep extends React.Component {
  constructor(props) {
    super(props);
    this.formik = React.createRef();
  }

  sendState() {
    return convertAllToString(this.formik.values);
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

  isValidated = async () => {
    this.formik.submitForm();
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    if (this.formik.isValid) {
      return true;
    }
    return false;
  };

  generateValidationSchema = (type) => {
    if (type) {
      if (type.importer) {
        return agencyValidationObject;
      } else {
        return agencyValidationObject.concat(addressValidationObject);
      }
    }
    return null;
  };

  render() {
    const validationSchema = this.generateValidationSchema(
      this.props.allStates.type
    );
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <GridContainer>
                <Formik
                  innerRef={(formik) => (this.formik = formik)}
                  initialValues={signupInitialValue}
                  validationSchema={validationSchema}
                >
                  <GridItem xs={12} sm={12} md={12} lg={12}>
                    <Form style={{ display: "flex", flexWrap: "wrap" }}>
                      <GridItem xs={12} sm={12} md={12} lg={12}>
                        <h4>Agency Information</h4>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FInput
                          label="Company Name"
                          type="text"
                          name="name"
                        ></FInput>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FInput
                          label="Representative Name"
                          type="text"
                          name="representativeName"
                        ></FInput>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FInput label="Email" type="text" name="email"></FInput>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FInput
                          label="Enterprise Number"
                          type="number"
                          name="enterpriseNumber"
                        ></FInput>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FSelect
                          label="Country"
                          name="country"
                          type="text"
                          placeholder=""
                          options={options}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <FCountryPhone label="Phone" name="phone" />
                      </GridItem>

                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FInput
                          label="Address"
                          type="text"
                          name="address"
                          maxLength={ADDRESS_MAX_LENGTH}
                        ></FInput>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FInput label="City" type="text" name="city"></FInput>
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={6}>
                        <FInput
                          label="Zip code"
                          type="number"
                          name="zipCode"
                        ></FInput>
                      </GridItem>

                      {this.props.allStates.type &&
                        !this.props.allStates.type.importer && (
                          <>
                            <GridItem xs={12} sm={12} md={12} lg={12}>
                              <Box mt={5}>
                                <h4>Shipping Address</h4>
                              </Box>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6} lg={6}>
                              <FInput
                                label="First Name"
                                type="text"
                                name="shippingFirstName"
                              ></FInput>
                            </GridItem>

                            <GridItem xs={12} sm={6} md={6} lg={6}>
                              <FInput
                                label="Last Name"
                                type="text"
                                name="shippingLastName"
                              ></FInput>
                            </GridItem>

                            <GridItem xs={12} sm={6} md={6} lg={6}>
                              <FInput
                                label="Shipping Street 1"
                                type="text"
                                name="shippingStreet1"
                              ></FInput>
                            </GridItem>

                            <GridItem xs={12} sm={6} md={6} lg={6}>
                              <FInput
                                label="Shipping Street 2"
                                type="text"
                                name="shippingStreet2"
                              ></FInput>
                            </GridItem>

                            <GridItem xs={12} sm={6} md={6} lg={6}>
                              <FSelect
                                label="Country"
                                name="shippingCountry"
                                type="text"
                                placeholder=""
                                options={options}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6}>
                              <FCountryPhone
                                label="Phone"
                                name="shippingPhone"
                              />
                            </GridItem>

                            <GridItem xs={12} sm={6} md={6} lg={6}>
                              <FInput
                                label="City"
                                type="text"
                                name="shippingCity"
                              ></FInput>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={6} lg={6}>
                              <FInput
                                label="Zip code"
                                type="number"
                                name="shippingZipCode"
                              ></FInput>
                            </GridItem>
                          </>
                        )}
                    </Form>
                  </GridItem>
                </Formik>
              </GridContainer>
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
