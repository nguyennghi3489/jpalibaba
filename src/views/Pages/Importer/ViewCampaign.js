// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
// @material-ui/icons
import Add from "@material-ui/icons/Add";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import { DurationView } from "components/DurationView";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { formatCurrency } from "helpers";
import { getCampaignByIdApi } from "provider/apis";
import { Campaign } from "provider/models";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactTable from "react-table";
import { appUrl } from "routing";

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
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <GridContainer>
        {campaignData && (
          <>
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
                        Description: <b>{campaignData.description}</b>
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <Typography variant="subtitle1" component="p">
                        Unit Price:{" "}
                        <b>{formatCurrency(campaignData.unitPrice)}</b>
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <Typography variant="subtitle1" component="p">
                        Minimum Import Lot :{" "}
                        <b>{campaignData.minAmountPerOrder} Units</b>
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <Typography variant="subtitle1" component="p">
                        Minimum amount to import :{" "}
                        <b>{campaignData.goal} Orders</b>
                      </Typography>
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <img
                        src={campaignData.image.mediumUrl}
                        className={classes.mainImage}
                        alt={campaignData.title}
                      />
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
                    <h4 className={classes.cardIconTitle}>Current Status</h4>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12}>
                        <Typography variant="subtitle1" component="p">
                          Percentage For Achivement:{" "}
                          <b>{campaignData.goalPercent}%</b>
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                          Present Order Quantity:{" "}
                          <b>{campaignData.placed} orders</b>
                        </Typography>
                        <Typography variant="subtitle1" component="p">
                          <DurationView
                            isStarted={campaignData.isStart}
                            duration={campaignData.duration}
                          />
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
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <h4 className={classes.cardIconTitle}> Orders</h4>
                      <NavLink to={appUrl.importerOrders}>
                        View all orders
                      </NavLink>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12}>
                        <ReactTable
                          data={campaignData.orders?.map((item) => ({
                            ...item,
                            id: (
                              <NavLink
                                to={`${appUrl.orderDetailPage}/${item.id}`}
                              >
                                {item.id}
                              </NavLink>
                            ),
                            total: item.price * item.quantity,
                          }))}
                          columns={[
                            {
                              Header: "Id",
                              accessor: "id",
                            },
                            {
                              Header: "Retailer",
                              accessor: "agencyName",
                            },
                            {
                              Header: "Total",
                              accessor: "total",
                            },
                          ]}
                          defaultPageSize={3}
                          className="-striped -highlight"
                          showPagination={false}
                        />
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
                          data={campaignData.pricePolicies?.map((item) => ({
                            ...item,
                          }))}
                          columns={[
                            {
                              Header: "Retailer",
                              accessor: "name",
                            },
                            {
                              Header: "Price",
                              accessor: "unitPrice",
                            },
                          ]}
                          defaultPageSize={10}
                          className="-striped -highlight"
                        />
                      </GridItem>
                    </GridContainer>
                    <Clearfix />
                  </CardBody>
                </Card>
              </GridItem>
            </GridItem>
          </>
        )}
      </GridContainer>
    </div>
  );
}
