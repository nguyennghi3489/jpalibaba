import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

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
import { getOrderProcessInfoSelector } from "provider/selectors";
import { NavLink, useHistory } from "react-router-dom";
import { formatCurrency } from "helpers";
import { Chip } from "@material-ui/core";
import { useLocalStorage } from "hooks/useLocalStorage";
import { appUrl } from "routing";
import { TextBoxWithLabel } from "components/TextBoxWithLabel";

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
          <CardBody>
            <GridContainer className={classes.actionSection}>
              <GridItem xs="6">
                <Typography align="left">
                  Current Status:{" "}
                  <Chip label="Proccess To Import" color="primary" />
                </Typography>
              </GridItem>
              <GridItem xs="6">
                <NavLink to={appUrl.retailerOrders} style={styles.buttonLink}>
                  <Button color="default">Back</Button>
                </NavLink>
                <Button
                  color="rose"
                  className={classes.updateProfileButton}
                  onClick={() => {}}
                >
                  Cancel
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>

      <GridItem xs={12} sm={6} md={6}>
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
