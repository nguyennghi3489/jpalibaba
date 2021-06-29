import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Check from "@material-ui/icons/Check";
import { FDatePicker } from "components/Form/FDatePicker";
import { FInput } from "components/Form/FInput";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Form, Formik } from "formik";
import { yupParseToInt } from "helpers";
import moment from "moment";
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
  checked: {
    "& + span": {
      color: "red",
    },
  },
};

class CampaignStep extends React.Component {
  state = {
    startNowAvailable: false,
  };

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

  toggleStartNow = (e) => {
    if (e.target.checked) {
      this.formik.setFieldValue("startDate", moment());
      this.setState({ startNowAvailable: true });
    } else {
      this.formik.setFieldValue("startDate", "");
      this.setState({ startNowAvailable: false });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Campaign Information</h4>
        </GridItem>
        <GridItem xs={12} sm={8}>
          <Formik
            innerRef={(formik) => (this.formik = formik)}
            initialValues={{
              minAmountPerOrder: "",
              goal: "",
              startDate: "",
              endDate: "",
            }}
            validationSchema={Yup.object({
              minAmountPerOrder: Yup.number()
                .required("Required")
                .min(0)
                .transform(yupParseToInt),
              goal: Yup.number()
                .required("Required")
                .min(0)
                .transform(yupParseToInt),
              startDate: Yup.string().required(),
              endDate: Yup.string().required(),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Minimum individual order lot"
                    name="minAmountPerOrder"
                    type="number"
                    placeholder=""
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FInput
                    label="Minimum order to import"
                    name="goal"
                    type="number"
                    placeholder=""
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FDatePicker
                    label="Start Date"
                    name="startDate"
                    disabled={this.state.startNowAvailable}
                    isValidDate={(date) => {
                      if (this.formik.values && this.formik.values.endDate)
                        return (
                          date.isSameOrAfter(moment(), "day") &&
                          date.isSameOrBefore(this.formik.values.endDate, "day")
                        );
                      return date.isSameOrAfter(moment(), "day");
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <FDatePicker
                    label="End Date"
                    name="endDate"
                    isValidDate={(date) => {
                      if (this.formik.values && this.formik.values.startDate)
                        return (
                          date.isSameOrAfter(moment(), "day") &&
                          date.isSameOrAfter(
                            this.formik.values.startDate,
                            "day"
                          )
                        );
                      return date.isSameOrAfter(moment(), "day");
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={this.toggleStartNow}
                        checkedIcon={<Check className={classes.checkedIcon} />}
                        classes={{
                          checked: classes.checked,
                          root: classes.checkRoot,
                        }}
                      />
                    }
                    label="Create Campaign and Start Now"
                  />
                </GridItem>
              </GridContainer>
            </Form>
          </Formik>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(CampaignStep);
