import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Datetime from "react-datetime";
import ReactTable from "react-table";

// @material-ui/icons
import Add from "@material-ui/icons/Add";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import FormControl from "@material-ui/core/FormControl";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import product1 from "assets/img/product-1.jpg";
import { priceDataTable } from "variables/general.js";

const useStyles = makeStyles(styles);

export default function ViewCampaign() {
  const classes = useStyles();

  const [data, setData] = React.useState(
    priceDataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        retailer: prop[0],
        priceDiscount: prop[1],
      };
    })
  );
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            {/* <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Add />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>View Campaign</h4>
            </CardHeader> */}
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12}>
                  <Typography variant="subtitle1" component="p">
                    Campaign Name: <b>Prin Cube May 2020</b>
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12}>
                  <Typography variant="subtitle1" component="p">
                    Minimum Import Lot : <b>1000 Units</b>
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12}>
                  <Typography variant="subtitle1" component="p">
                    Minimum Order To Ship : <b>1000 Order</b>
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12}>
                  <img src={product1} className={classes.mainImage} />
                  <Typography variant="h6" component="p">
                    Prin Cube
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </GridItem>
              </GridContainer>

              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Add />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Actions</h4>
              </CardHeader>
              <CardBody>
                {/* <Typography variant="subtitle1" component="p">
                  The campaign is not available to update. Do you want to cancel
                  it and create new one?
                </Typography> */}
                <Typography variant="subtitle1" component="p">
                  The campaign is currently expired.
                </Typography>
                <FormControl fullWidth className={classes.datetime}>
                  <Datetime
                    inputProps={{ placeholder: "Change Expiration Date" }}
                  />
                </FormControl>
                {/* <Button color="rose" className={classes.createButton}>
                  Cancel Campaign
                </Button> */}
                <Button color="rose" className={classes.createButton}>
                  Reset Campaign
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Add />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Current Status</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <Typography variant="subtitle1" component="p">
                      The current price for this product is: <b>100.000 USD</b>
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      Percentage For Achivement: <b>20%</b>
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      Present Order Quantity: <b>1000 orders</b>
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      Remaining days to order: <b>10 days</b>
                    </Typography>
                  </GridItem>
                </GridContainer>
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Add />
                </CardIcon>
                <h4 className={classes.cardIconTitle}>Retailer Policies</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <ReactTable
                      data={data.map((item) => ({ ...item }))}
                      columns={[
                        {
                          Header: "Retailer",
                          accessor: "retailer",
                        },
                        {
                          Header: "Price",
                          accessor: "priceDiscount",
                        },
                      ]}
                      defaultPageSize={10}
                      //   showPaginationTop
                      //   showPaginationBottom={false}
                      className="-striped -highlight"
                    />
                  </GridItem>
                </GridContainer>
                <Clearfix />
              </CardBody>
            </Card>
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
}
