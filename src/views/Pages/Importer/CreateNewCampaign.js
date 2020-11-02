import { Checkbox, FormControlLabel } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Check from "@material-ui/icons/Check";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { FDatePicker } from "components/Form/FDatePicker";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FieldArray, Form, Formik } from "formik";
import {
  convertAllToString,
  convertStateFieldToValidatorField,
  fieldStateSuffix,
  FieldValidateStatus,
  fieldValidatorSuffix,
  getFormStateField,
  parseNewCampaign,
  required,
} from "helpers";
import moment from "moment";
import { addCampaign, getProducts, updateAgencyInfo } from "provider/actions";
import {
  getAgencyIdSelector,
  getProductList,
  getUserIdSelector,
} from "provider/selectors";
import React from "react";
import Datetime from "react-datetime";
import { connect } from "react-redux";
import * as Yup from "yup";
import { agencyOptions } from "constant";

const useStyles = makeStyles(styles);

class CreateNewCampaignPage extends React.Component {
  constructor(props) {
    super(props);
    this.formik = React.createRef();
  }

  state = {
    productId: "",
    ["productId" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    // ["productId" + fieldValidatorSuffix]: [required],
    categoryId: "",
    ["categoryId" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    // ["categoryId" + fieldValidatorSuffix]: [required],
    minimumOrderlot: "",
    ["minimumOrderlot" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["minimumOrderlot" + fieldValidatorSuffix]: [required],
    minimumOrderToImport: "",
    ["minimumOrderToImport" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["minimumOrderToImport" + fieldValidatorSuffix]: [required],
    startDate: "",
    endDate: "",
    toggleStartDate: false,
  };

  componentDidMount() {
    const { agencyId } = this.props;
    this.props.getProducts({ agencyId, limit: 20, offset: 0 });
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

  startCampaignNow = (value) => {
    if (value.target.checked) {
      this.setState({ startDate: moment() });
    }
    this.setState({ startNow: value.target.checked });
  };

  createCampaign = () => {
    console.log(this.state);
    const { agencyId, userId } = this.props;
    if (this.isValidated()) {
      this.props.addCampaign(parseNewCampaign(this.state, agencyId, userId));
    }
  };

  toggleStartNow = () => {
    this.setState({ toggleStartDate: !this.state.toggleStartDate });
  };

  render() {
    const { classes, products } = this.props;
    const { toggleStartDate } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <Formik
                  innerRef={(formik) => (this.formik = formik)}
                  initialValues={{
                    minimumOrderlot: "",
                    minimumImport: "",
                    startDate: "",
                    endDate: "",
                    pricePolicy: [],
                  }}
                  validationSchema={Yup.object({
                    minimumOrderlot: Yup.number().required("Required"),
                    minimumImport: Yup.number().required("Required"),
                    startDate: Yup.string().required(),
                    endDate: Yup.string().required(),
                    pricePolicy: Yup.array().of(
                      Yup.object().shape({
                        retailerId: Yup.string().required(),
                        price: Yup.string().required(),
                      })
                    ),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                      console.log(values);
                      // updateAgencyInfo(convertAllToString(values));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  <Form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6}>
                        <FInput
                          label="Minimum individual order lot"
                          name="minimumOrderlot"
                          type="text"
                          placeholder=""
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <FInput
                          label="Minimum order to import"
                          name="minimumImport"
                          type="text"
                          placeholder=""
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6}>
                        <FDatePicker
                          label="Start Date"
                          name="startDate"
                          isValidDate={(date) => {
                            if (
                              this.formik.values &&
                              this.formik.values.endDate
                            )
                              return (
                                date.isSameOrAfter(moment(), "day") &&
                                date.isSameOrBefore(
                                  this.formik.values.endDate,
                                  "day"
                                )
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
                            if (
                              this.formik.values &&
                              this.formik.values.startDate
                            )
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
                    </GridContainer>
                    <FieldArray
                      name="pricePolicy"
                      render={(arrayHelpers) => (
                        <div>
                          {this.formik.values &&
                            this.formik.values.pricePolicy.map(
                              (friend, index) => (
                                <GridContainer key={index}>
                                  <GridItem xs={12} sm={5} md={5}>
                                    <FSelect
                                      options={agencyOptions}
                                      label="Retailer"
                                      name={`pricePolicy.${index}.retailerId`}
                                      type="text"
                                      placeholder=""
                                    />
                                  </GridItem>
                                  <GridItem xs={8} sm={4} md={4}>
                                    <FInput
                                      label="Price"
                                      name={`pricePolicy.${index}.price`}
                                      type="text"
                                      placeholder=""
                                    />
                                  </GridItem>

                                  <GridItem xs={4} sm={3} md={3}>
                                    <Button
                                      color="rose"
                                      onClick={() => {
                                        console.log(index);
                                        arrayHelpers.remove(index);
                                      }}
                                      type="button"
                                    >
                                      Remove Policy
                                    </Button>
                                  </GridItem>
                                </GridContainer>
                              )
                            )}

                          <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                              <Button
                                color="primary"
                                onClick={() =>
                                  arrayHelpers.push({
                                    retailerId: "",
                                    price: "",
                                  })
                                }
                                type="button"
                              >
                                Add new Price Policy
                              </Button>
                            </GridItem>
                          </GridContainer>
                        </div>
                      )}
                    />
                    <GridContainer style={{ marginTop: "20px" }}>
                      <GridItem xs={9}></GridItem>
                      <GridItem xs={3}>
                        <Button
                          color="rose"
                          className={classes.actionButton}
                          type="submit"
                        >
                          Create Campaign
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </Form>
                </Formik>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
  userId: getUserIdSelector(state),
  products: getProductList(state),
});
export default connect(
  mapStateToProps,
  { addCampaign, getProducts }
)(withStyles(styles)(CreateNewCampaignPage));
