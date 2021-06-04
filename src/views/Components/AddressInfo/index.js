// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.js";
import { FCountryPhone } from "components/Form/FCountryPhone";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { countryOptions } from "constant";
import { Form, Formik } from "formik";
import { ADDRESS_REGEX, ONLY_ALPHABET, verifyPhoneNumber } from "helpers";
import React from "react";
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

const AddressInfo = ({ classes, title, data, onUpdate }) => {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12}>
        <h3>{title}</h3>
      </GridItem>
      <GridItem xs={12}>
        <Formik
          initialValues={data}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .required("Required")
              .matches(ONLY_ALPHABET, "Firstname is invalid"),
            lastName: Yup.string()
              .required("Required")
              .matches(ONLY_ALPHABET, "Lastname is invalid"),
            phone: Yup.string()
              .required("Required")
              .test("phone_valid", "phone is invalid", (value) =>
                verifyPhoneNumber(value)
              ),
            zipCode: Yup.number().required("Required"),
            street1: Yup.string()
              .required("Required")
              .matches(ADDRESS_REGEX, "street1 is invalid"),
            street2: Yup.string().matches(ADDRESS_REGEX, "street2 is invalid"),
            city: Yup.string()
              .required("Required")
              .matches(ONLY_ALPHABET, "city is invalid"),
            country: Yup.string()
              .required("Required")
              .matches(ONLY_ALPHABET, "city is invalid"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              onUpdate(values.id, values.agencyId, values);
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <FInput
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder=""
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <FInput
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder=""
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <FInput
                  label="Street 1"
                  name="street1"
                  type="text"
                  placeholder=""
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <FInput
                  label="Street 2"
                  name="street2"
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
                <FInput label="City" name="city" type="text" placeholder="" />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <FInput
                  label="Zip Code"
                  name="zipCode"
                  type="text"
                  placeholder=""
                />
              </GridItem>
            </GridContainer>
            <Button color="rose" className={classes.actionButton} type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </GridItem>
    </GridContainer>
  );
};

export default withStyles(style)(AddressInfo);
