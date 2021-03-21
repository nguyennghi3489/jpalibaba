import React from "react";
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

import { TextBoxWithLabel } from "components/TextBoxWithLabel";
import { NavLink } from "react-router-dom";
import { appUrl } from "routing";
import { OrderStatusChip } from "components/OrderStatusChip";
import { formatCurrency, formatStandardDate } from "helpers";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";
import { AutoCompleteSelect } from "components/AutoCompleteSelect";
import { orderStatusOptions } from "constant";

const useStyles = makeStyles(styles);
export const OrderDetailInfo = ({ data }) => {
  const {
    id,
    campaign: { product },
    shippingAddress,
    price,
    quantity,
    modified,
    status,
  } = data;
  const { title, brand, image } = product;
  const {
    city,
    country,
    firstName,
    lastName,
    phone,
    street1,
    street2,
    zipCode,
  } = shippingAddress;

  const classes = useStyles();
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
                      src={image.thumbUrl}
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
                  <span key="key">{formatCurrency(price)}</span>,
                  <span key="key">{quantity}</span>,
                ],

                {
                  total: true,
                  colspan: "2",
                  amount: (
                    <span key="key">{formatCurrency(quantity * price)}</span>
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
            <GridContainer>
              <GridItem xs="12">
                <Typography align="left">
                  Status: <OrderStatusChip status={status} /> (Updated:{" "}
                  <b>{formatStandardDate(modified)}</b>)
                </Typography>
              </GridItem>
              <GridItem xs="12">
                <GridContainer className={classes.actionControl}>
                  <GridItem xs="6">
                    <Typography align="left" variant="overline" display="block">
                      Change order status to:{" "}
                    </Typography>
                    <AutoCompleteSelect
                      options={orderStatusOptions}
                      value={status}
                      onChange={() => {}}
                    />
                  </GridItem>
                  <GridItem xs="6">
                    <NavLink
                      to={appUrl.importerOrders}
                      style={styles.buttonLink}
                    >
                      <Button color="default">Back</Button>
                    </NavLink>
                    <Button
                      color="rose"
                      className={classes.updateProfileButton}
                      onClick={() => {}}
                    >
                      Update
                    </Button>
                  </GridItem>
                </GridContainer>
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
                <TextBoxWithLabel label="First Name" content={firstName} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Last Name" content={lastName} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Street 1" content={street1} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Street 2" content={street2} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Country" content={country} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="Phone" content={phone} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="City" content={city} />
              </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                <TextBoxWithLabel label="ZipCode" content={zipCode} />
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
