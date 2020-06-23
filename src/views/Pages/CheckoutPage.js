import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
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

const useStyles = makeStyles(styles);

export default function CheckoutPage() {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  const fillButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close },
  ].map((prop, key) => {
    return (
      <Button color={prop.color} className={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const simpleButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close },
  ].map((prop, key) => {
    return (
      <Button
        color={prop.color}
        simple
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close },
  ].map((prop, key) => {
    return (
      <Button
        round
        color={prop.color}
        className={classes.actionButton + " " + classes.actionButtonRound}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card className={classes.card}>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4 className={classes.cardTitle}>Order Detail</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <Table
              tableHead={[
                "",
                "PRODUCT",
                "COLOR",
                "SIZE",
                "PRICE",
                "QTY",
                "AMOUNT",
                "",
              ]}
              tableData={[
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product1} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Spring Jacket
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>
                      by Dolce&amp;Gabbana
                    </small>
                  </span>,
                  "Red",
                  "M",
                  <span key="key">
                    <small className={classes.tdNumberSmall}>€</small> 549
                  </span>,
                  <span key="key">
                    1{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove className={classes.icon} />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add className={classes.icon} />
                      </Button>
                    </div>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>€</small> 549
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>,
                ],
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product2} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Short Pants{" "}
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>by Pucci</small>
                  </span>,
                  "Purple",
                  "M",
                  <span key="key">
                    <small className={classes.tdNumberSmall}>€</small> 499
                  </span>,
                  <span key="key">
                    2{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove className={classes.icon} />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add className={classes.icon} />
                      </Button>
                    </div>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>€</small> 998
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>,
                ],
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product3} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Pencil Skirt
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>by Valentino</small>
                  </span>,
                  "White",
                  "XL",
                  <span key="key">
                    <small className={classes.tdNumberSmall}>€</small> 799
                  </span>,
                  <span key="key">
                    1{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove className={classes.icon} />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add className={classes.icon} />
                      </Button>
                    </div>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>€</small> 799
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>,
                ],
                {
                  total: true,
                  colspan: "5",
                  amount: (
                    <span key="key">
                      <small>€</small>2,346
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
              <GridItem xs={12} sm={7}>
                <CustomInput
                  labelText="Contact Name"
                  id="streetno"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={3}>
                <CustomInput
                  labelText="Phone"
                  id="streetname"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={3}>
                <CustomInput
                  labelText="Street No."
                  id="streetno"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={7}>
                <CustomInput
                  labelText="Street Name"
                  id="streetname"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={4}>
                <CustomInput
                  labelText="Postal Code"
                  id="country"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
        <Card className={classes.card}>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4 className={classes.cardTitle}>Confirmation Information</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <div className={classes.confirmSection}>
              <div>
                <h3>
                  Total Price : <b>€2,346 </b>
                </h3>
                <Typography variant="body2" color="textSecondary" component="p">
                  Your order is successful. The order is not available for
                  updating after 48 hours.
                </Typography>
              </div>
              <div>
                <Button color="info" round size="lg">
                  Complete Purchase{" "}
                  <KeyboardArrowRight className={classes.icon} />
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
