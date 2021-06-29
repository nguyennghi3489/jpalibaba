// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.js";
import { FCountryPhone } from "components/Form/FCountryPhone";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { ADDRESS_MAX_LENGTH, countryOptions } from "constant";
import { Form, Formik } from "formik";
import {
  ADDRESS_REGEX,
  ALPHABET_AND_NUMBER,
  convertAllToString,
  ONLY_ALPHABET,
  ONLY_NUMBER,
  verifyPhoneNumber,
} from "helpers";
import { updateAgencyInfo } from "provider/actions";
import React from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

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
  actionButton: {
    float: "right",
  },
};

class AgencyInfo extends React.Component {
  render() {
    const { classes, title, data, updateAgencyInfo } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <h3>{title}</h3>
        </GridItem>
        <GridItem xs={12}>
          <Formik
            initialValues={data}
            validationSchema={Yup.object({
              name: Yup.string()
                .required("Required")
                .matches(ALPHABET_AND_NUMBER, "Name is invalid"),
              representativeName: Yup.string()
                .required("Required")
                .matches(ALPHABET_AND_NUMBER, "RepresentativeName is invalid"),
              enterpriseNumber: Yup.string()
                .max(10)
                .matches(
                  ONLY_NUMBER,
                  "enterpriseNumber must be a positive number"
                )
                .required(),
              address: Yup.string()
                .required("Required")
                .matches(ADDRESS_REGEX, "address is invalid"),
              country: Yup.string()
                .required("Required")
                .matches(ONLY_ALPHABET, "city is invalid"),
              phone: Yup.string()
                .required()
                .test("phone_valid", "phone is invalid", (value) =>
                  verifyPhoneNumber(value)
                ),
              city: Yup.string()
                .required("Required")
                .matches(ONLY_ALPHABET, "city is invalid"),
              zipCode: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                updateAgencyInfo(convertAllToString(values));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Company Name"
                    name="name"
                    type="text"
                    placeholder=""
                  />
                </GridItem>

                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Representative Name"
                    name="representativeName"
                    type="text"
                    placeholder=""
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Enterprise Number"
                    name="enterpriseNumber"
                    type="number"
                    min="0"
                    placeholder=""
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Contact Email"
                    name="email"
                    type="text"
                    placeholder=""
                  />
                </GridItem>

                <GridItem xs={12} sm={6} md={6}>
                  <FSelect
                    label="Country"
                    name="country"
                    type="text"
                    placeholder=""
                    options={countryOptions}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FCountryPhone label="Phone" name="phone" />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Address"
                    name="address"
                    type="text"
                    placeholder=""
                    maxLength={ADDRESS_MAX_LENGTH}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput label="City" name="city" type="text" placeholder="" />
                </GridItem>

                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Zip Code"
                    name="zipCode"
                    type="number"
                    min="0"
                    placeholder=""
                  />
                </GridItem>
              </GridContainer>
              <Button
                color="rose"
                className={classes.actionButton}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </GridItem>
      </GridContainer>
    );
  }
}

export default connect(
  null,
  { updateAgencyInfo }
)(withStyles(style)(AgencyInfo));
