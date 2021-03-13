import React, { useEffect, useRef, useState } from "react";
import { FCountryPhone } from "components/Form/FCountryPhone";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";
import { countryOptions } from "constant";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
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

import { connect } from "react-redux";
import {
  getAgencyIdSelector,
  getOrderProcessInfoSelector,
} from "provider/selectors";
import { useHistory } from "react-router-dom";
import { formatCurrency } from "helpers";
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Form, Formik } from "formik";
import { orderSlice } from "provider/actions";
import { addressSlice } from "provider/actions/slice/addresses";
import { getAddressListSelector } from "provider/selectors/address";
import { AddressCheckbox } from "../components/AddressCheckbox";
import {
  addressValidationSchema,
  addressValidationSchemaInitialValue,
} from "validators/address";

const useStyles = makeStyles(styles);

function CheckoutPage({
  order,
  createOrder,
  getAddress,
  agencyId,
  addressList,
  createAddress,
}) {
  const classes = useStyles();
  const [localQuantity, setLocalQuantity] = useState(0);
  const [cart, setCart] = useLocalStorage("cart", null);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const form = useRef(null);
  const history = useHistory();

  if (!cart) {
    history.push("/");
  }

  const {
    campaign: { title, image, brand, unitPrice },
    quantity,
  } = cart;

  useEffect(() => {
    if (cart) {
      setLocalQuantity(cart.quantity);
      getAddress(agencyId);
    }
  }, [cart]);

  useEffect(() => {
    form.current.resetForm();
    setIsCreating(false);
  }, [addressList.length]);

  const handleCreateAnOrder = () => {
    const {
      campaign: { agencyId: importerId, id: campaignId },
      quantity,
    } = cart;

    createOrder({ importerId, campaignId, quantity, shippingAddressId: "" });
  };

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Formik
          innerRef={form}
          initialValues={addressValidationSchemaInitialValue}
          validationSchema={addressValidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setIsCreating(true);
            createAddress(values);
            setSubmitting(false);
          }}
        >
          <Form>
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
                  <GridItem xs={12}>
                    <FormGroup>
                      {addressList.map((address) => (
                        <AddressCheckbox
                          checked={selectedAddress === address.id}
                          onChange={() => {
                            setSelectedAddress(address.id);
                          }}
                          name="checkedA"
                          address={address}
                        />
                      ))}

                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={selectedAddress === null}
                            onChange={() => setSelectedAddress(null)}
                            name="checkedA"
                          />
                        }
                        label="Create New Address"
                      />
                    </FormGroup>
                  </GridItem>
                </GridContainer>
                {isCreating ? (
                  <div>
                    <CircularProgress />
                  </div>
                ) : (
                  !selectedAddress && (
                    <GridContainer className={classes.newAddress}>
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

                      <GridItem xs={12} sm={6} md={6}>
                        <Button type="submit" color="rose">
                          Create
                        </Button>
                      </GridItem>
                    </GridContainer>
                  )
                )}
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
                    <Button
                      color="info"
                      round
                      size="lg"
                      onClick={handleCreateAnOrder}
                    >
                      Complete Purchase{" "}
                      <KeyboardArrowRight className={classes.icon} />
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Form>
        </Formik>
      </GridItem>
    </GridContainer>
  );
}

const mapStateToProps = (state) => ({
  order: getOrderProcessInfoSelector(state),
  agencyId: getAgencyIdSelector(state),
  addressList: getAddressListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  createOrder: (importerId, orderInfo) =>
    dispatch(orderSlice.actions.createOrder({ ...orderInfo, importerId })),
  getAddress: (agencyId) =>
    dispatch(addressSlice.actions.getAddresses(agencyId)),
  createAddress: (value) => {
    dispatch(addressSlice.actions.createAddress(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPage);
