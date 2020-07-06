import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";

import { updateAgencyInfo } from "provider/actions";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { FInput } from "components/Form/FInput";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

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
  constructor(props) {
    super(props);
  }

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
              name: Yup.string().required("Required"),
              country: Yup.string().required("Required"),
              city: Yup.string().required("Required"),
              zipCode: Yup.string()
                .max(10)
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                updateAgencyInfo(values);
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
                    type="text"
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
                  <FInput
                    label="Contact Phone"
                    name="phone"
                    type="text"
                    placeholder=""
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Address"
                    name="address"
                    type="text"
                    placeholder=""
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Country"
                    name="country"
                    type="text"
                    placeholder=""
                  />
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
