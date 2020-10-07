import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import Select from "react-select";
import * as Yup from "yup";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FInput } from "components/Form/FInput";
import { ONLY_ALPHABET } from "helpers";
import withStyles from "@material-ui/core/styles/withStyles";
import { FSelect } from "components/Form/FSelect";
import { FDatePicker } from "components/Form/FDatePicker";
import moment from "moment";
import { countryOptions } from "constant";

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

class PricePolicyStep extends React.Component {
  constructor(props) {
    super(props);
    this.formik = React.createRef();
  }
  sendState() {
    console.log(this.formik.values);
    return this.formik.values;
  }

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

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Price Policy Information</h4>
        </GridItem>
        <GridItem xs={12} sm={8}>
          <Formik
            innerRef={(formik) => (this.formik = formik)}
            initialValues={{
              retailer: "",
              policyPrice: "",
            }}
            validationSchema={Yup.object({
              retailer: Yup.string(),
              policyPrice: Yup.string().test(
                "policy-price-belong-retailer",
                "Passwords must match",
                function(value) {
                  return (
                    !this.parent.retailer || (this.parent.retailer && value)
                  );
                }
              ),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <FSelect
                label="Retailer"
                name="retailer"
                placeholder=""
                options={countryOptions}
                isClearable
              />
              <FInput
                label="Price for this retailer"
                name="policyPrice"
                type="text"
                placeholder=""
              />
            </Form>
          </Formik>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(PricePolicyStep);
