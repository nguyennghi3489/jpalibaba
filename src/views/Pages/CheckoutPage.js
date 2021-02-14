import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { FCountryPhone } from "components/Form/FCountryPhone";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";
import { ADDRESS_MAX_LENGTH, countryOptions } from "constant";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import CustomInput from "components/CustomInput/CustomInput.js";
import CardText from "components/Card/CardText.js";
import Typography from "@material-ui/core/Typography";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

import product1 from "assets/img/product1.jpg";
import product2 from "assets/img/product2.jpg";
import product3 from "assets/img/product3.jpg";
import { connect } from "react-redux";
import { getOrderProcessInfoSelector } from "provider/selectors";
import { useHistory } from "react-router-dom";
import {
  ADDRESS_REGEX,
  ALPHABET_AND_NUMBER,
  EMAIL_REGEX,
  formatCurrency,
  ONLY_ALPHABET,
  VIETNAM_PHONE,
} from "helpers";
import { TextField } from "@material-ui/core";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Form, Formik } from "formik";

const useStyles = makeStyles(styles);

function CheckoutPage({ order }) {
  const classes = useStyles();
  const history = useHistory();
  const [localQuantity, setLocalQuantity] = useState(0);
  const [cart, setCart] = useLocalStorage("cart", null);
  useEffect(() => {
    if (cart) {
      setLocalQuantity(cart.quantity);
    }
  }, [cart]);

  if (!cart) {
    history.push("/");
  }

  const {
    campaign: { title, image, brand, unitPrice },
    quantity,
  } = cart;

  return (
    <GridContainer>
      <Formik
        initialValues={{}}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("Required")
            .matches(ONLY_ALPHABET, "Firstname is invalid"),
          lastName: Yup.string()
            .required("Required")
            .matches(ONLY_ALPHABET, "Lastname is invalid"),
          phone: Yup.string()
            .required("Required")
            .matches(VIETNAM_PHONE, "phone is invalid"),
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
            // onUpdate(values.id, values.agencyId, values);
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <GridItem xs={12}>
            <Card className={classes.card}>
              <CardHeader color="rose" text>
                <CardText color="rose">
                  <h4 className={classes.cardTitle}>Order Detail</h4>
                </CardText>
              </CardHeader>
              <CardBody>
                <Table
                  tableHead={["", "PRODUCT", "UNIT PRICE", "QTY"]}
                  tableData={[
                    [
                      <div className={classes.imgContainer} key="key">
                        <img
                          src={image.thumbnail}
                          alt="..."
                          className={classes.img}
                        />
                      </div>,
                      <span key="key">
                        <a href="#jacket" className={classes.tdNameAnchor}>
                          {title}
                        </a>
                        <br />
                        <small className={classes.tdNameSmall}>
                          by {brand}
                        </small>
                      </span>,
                      <span key="key">{formatCurrency(unitPrice)}</span>,
                      <span key="key">{quantity}</span>,
                    ],

                    {
                      total: true,
                      colspan: "2",
                      amount: (
                        <span key="key">
                          {formatCurrency(localQuantity * unitPrice)}
                        </span>
                      ),
                    },
                  ]}
                  tableShopping
                  customHeadCellClasses={[
                    classes.center,
                    classes.description,
                    classes.description,
                    classes.right,
                    classes.right,
                    classes.right,
                  ]}
                  customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                  customCellClasses={[
                    classes.tdName,
                    classes.customFont,
                    classes.customFont,
                    classes.tdNumber,
                    classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                    classes.tdNumber,
                  ]}
                  customClassesForCells={[1, 2, 3, 4, 5, 6]}
                />
              </CardBody>
            </Card>
            <Card className={classes.card}>
              <CardHeader color="rose" text>
                <CardText color="rose">
                  <h4 className={classes.cardTitle}>Shipping Information</h4>
                </CardText>
              </CardHeader>
              <CardBody>
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
                    <FInput
                      label="City"
                      name="city"
                      type="text"
                      placeholder=""
                    />
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
              </CardBody>
            </Card>
            <Card className={classes.card}>
              <CardHeader color="rose" text>
                <CardText color="rose">
                  <h4 className={classes.cardTitle}>
                    Confirmation Information
                  </h4>
                </CardText>
              </CardHeader>
              <CardBody>
                <div className={classes.confirmSection}>
                  <div>
                    <h3>
                      Total Price :{" "}
                      <b>{formatCurrency(localQuantity * unitPrice)} </b>
                    </h3>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      The order is not available for updating after 48 hours.
                    </Typography>
                  </div>
                  <div>
                    <Button color="info" round size="lg" type="submit">
                      Complete Purchase{" "}
                      <KeyboardArrowRight className={classes.icon} />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </Form>
      </Formik>
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  order: getOrderProcessInfoSelector(state),
});

export default connect(
  mapStateToProps,
  {}
)(CheckoutPage);
