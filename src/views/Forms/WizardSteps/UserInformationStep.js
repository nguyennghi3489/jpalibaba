import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FInput } from "components/Form/FInput";
import { ONLY_ALPHABET } from "helpers";
import withStyles from "@material-ui/core/styles/withStyles";
import { FDatePicker } from "components/Form/FDatePicker";
import { FSelect } from "components/Form/FSelect";

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

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
class ClientInformationStep extends React.Component {
  constructor(props) {
    super(props);
    this.formik = React.createRef();
  }
  sendState() {
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
          <h4 className={classes.infoText}>Update your information</h4>
        </GridItem>
        <GridItem xs={12} sm={8}>
          <Formik
            innerRef={(formik) => (this.formik = formik)}
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              date: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .required()
                .matches(ONLY_ALPHABET),
              lastName: Yup.string()
                .required()
                .matches(ONLY_ALPHABET),
              email: Yup.string()
                .required("Required")
                .email("Invalid email"),
              password: Yup.string()
                .required("Required")
                .min(9),
              confirmPassword: Yup.string().test(
                "passwords-match",
                "Passwords must match",
                function(value) {
                  return this.parent.password === value;
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
              <FInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder=""
              />
              <FInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder=""
              />
              <FInput label="Email" name="email" type="text" placeholder="" />
              <FInput
                label="Password"
                name="password"
                type="password"
                placeholder=""
              />
              <FInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder=""
              />
              {/* <FSelect
                label="Date"
                name="date"
                defaultValue="chocolate"
                options={options}
              /> */}
            </Form>
          </Formik>
        </GridItem>
      </GridContainer>
    );
  }
}

ClientInformationStep.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(ClientInformationStep);
