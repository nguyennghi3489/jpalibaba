import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Datetime from "react-datetime";
import ReactTable from "react-table";

import { Campaign } from "provider/models/campaign";
import { getCampaignByIdApi } from "provider/apis";

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

export default function ViewCampaign(props) {
  const classes = useStyles();

  const [campaignData, setCampaignData] = useState(null);

  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    const fetch = async () => {
      const data = await getCampaignByIdApi(id);
      const campaignDetail = new Campaign(data.campaign);
      setCampaignData(campaignDetail.toPublicCampaignDetailItem());
    };
    fetch();
  }, []);

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
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12}>
                  <Typography variant="subtitle1" component="p">
                    Campaign Name: <b>{campaignData.title}</b>
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12}>
                  <Typography variant="subtitle1" component="p">
                    Minimum Import Lot :{" "}
                    <b>{campaignData.minAmountPerOrder} Units</b>
                  </Typography>
                </GridItem>
                {/* <GridItem xs={12} sm={12}>
                  <Typography variant="subtitle1" component="p">
                    Minimum Order To Ship : <b>1000 Order</b>
                  </Typography>
                </GridItem> */}
                <GridItem xs={12} sm={12}>
                  <img src={campaignData.image} className={classes.mainImage} />
                  <Typography variant="h6" component="p">
                    {campaignData.productName}
                  </Typography>
                </GridItem>
                <GridItem xs={12} sm={12}>
                  {campaignData.description}
                </GridItem>
              </GridContainer>

              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          {campaignData.isExpiry && (
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
          )}
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
                      The current price for this product is:{" "}
                      <b>{campaignData.totalSales}JPY</b>
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      Percentage For Achivement:{" "}
                      <b>{campaignData.goalPercent}%</b>
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      Present Order Quantity:{" "}
                      <b>{campaignData.placed} orders</b>
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      {campaignData.isStart ? (
                        <>
                          Remaining days to order:
                          <b>{campaignData.duration} Days</b>{" "}
                        </>
                      ) : (
                        <b>Not started</b>
                      )}
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
                      data={[].map((item) => ({ ...item }))}
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
