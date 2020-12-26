import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import { FDatePicker } from "components/Form/FDatePicker";
import { FInput } from "components/Form/FInput";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { Form, Formik } from "formik";
import { parseNewCampaign, yupParseToInt } from "helpers";
import moment from "moment";
import { addCampaign, getProducts } from "provider/actions";
import {
  getAgencyIdSelector,
  getProductList,
  getUserIdSelector,
} from "provider/selectors";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";

const CreateNewCampaignPage = ({
  agencyId,
  userId,
  getProducts,
  addCampaign,
  ...props
}) => {
  const formikForm = useRef(null);

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    getProducts({ agencyId, limit: 20, offset: 0 });
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <Formik
                innerRef={formikForm}
                initialValues={{
                  minAmountPerOrder: "",
                  goal: "",
                  startDate: "",
                  endDate: "",
                }}
                validationSchema={Yup.object({
                  minAmountPerOrder: Yup.number()
                    .required("Required")
                    .transform(yupParseToInt),
                  goal: Yup.number()
                    .required("Required")
                    .transform(yupParseToInt),
                  startDate: Yup.string().required(),
                  endDate: Yup.string().required(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  const newCampaign = parseNewCampaign(
                    values,
                    agencyId,
                    userId,
                    id
                  );
                  console.log(newCampaign);
                  addCampaign(newCampaign);
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
                        isValidDate={(date) => {
                          if (
                            formikForm.current &&
                            formikForm.current.values &&
                            formikForm.current.values.endDate
                          )
                            return (
                              date.isSameOrAfter(moment(), "day") &&
                              date.isSameOrBefore(
                                formikForm.current.values.endDate,
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
                            formikForm.current &&
                            formikForm.current.values &&
                            formikForm.current.values.startDate
                          )
                            return (
                              date.isSameOrAfter(moment(), "day") &&
                              date.isSameOrAfter(
                                formikForm.current.values.startDate,
                                "day"
                              )
                            );
                          return date.isSameOrAfter(moment(), "day");
                        }}
                      />
                    </GridItem>
                  </GridContainer>

                  <GridContainer style={{ marginTop: "20px" }}>
                    <GridItem xs={9}></GridItem>
                    <GridItem xs={3}>
                      <Button color="rose" type="submit">
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
};

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
  userId: getUserIdSelector(state),
  products: getProductList(state),
});
export default connect(
  mapStateToProps,
  { addCampaign, getProducts }
)(withStyles(styles)(CreateNewCampaignPage));
