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
import { NavLink, useHistory } from "react-router-dom";
import {
  ADDRESS_REGEX,
  ALPHABET_AND_NUMBER,
  EMAIL_REGEX,
  formatCurrency,
  ONLY_ALPHABET,
  VIETNAM_PHONE,
} from "helpers";
import { Chip, TextField } from "@material-ui/core";
import { useLocalStorage } from "hooks/useLocalStorage";
import { Form, Formik } from "formik";
import { appUrl } from "routing";

const useStyles = makeStyles(styles);

const TextBoxWithLabel = ({ label, content }) => {
  return (
    <>
      <Typography variant="overline" display="block" gutterBottom>
        {label}
      </Typography>
      <Typography variant="body1" display="block">
        {content}
      </Typography>
    </>
  );
};

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
      <GridItem xs={12} sm={6} md={6}>
        <Card className={classes.card}>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4 className={classes.cardTitle}>Order Information</h4>
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
                    <small className={classes.tdNameSmall}>by {brand}</small>
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
          <CardBody className={classes.actionSection}>
            <NavLink to={appUrl.adminDefaultPage} style={styles.buttonLink}>
              <Button color="default">Back</Button>
            </NavLink>
            <Button
              color="rose"
              className={classes.updateProfileButton}
              onClick={() => {}}
            >
              Cancel
            </Button>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={6} md={6}>
        <Card className={classes.card}>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4 className={classes.cardTitle}>Current Status</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <Typography variant="body1">
                  <Chip label="Proccess To Import" color="primary" />
                </Typography>
              </GridItem>
            </GridContainer>
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
                <TextBoxWithLabel label="First Name" content={"Nguyen"} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Last Name" content={"Anh"} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Street 1" content={"A Lotte Street"} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel
                  label="Street 2"
                  content={"A Lotte Street C"}
                />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Country" content={"Viet Nam"} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Phone" content={"0799213233"} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="City" content={"Ho Chi Minh"} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="ZipCode" content={"800122"} />
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
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
