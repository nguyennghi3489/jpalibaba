import React, { useEffect, useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import EmojiFlagsIcon from "@material-ui/icons/Flag";
import Schedule from "@material-ui/icons/Schedule";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Person from "@material-ui/icons/Person";
import LocalOffer from "@material-ui/icons/LocalOffer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import TextField from "@material-ui/core/TextField";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import { Campaign } from "provider/models/campaign";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "./ProductDetailPageStyle.js";

import product1 from "assets/img/product-1.jpg";
import { getCampaignByIdApi } from "provider/apis";

const useStyles = makeStyles(styles);

export default function ProductDetailPage(props) {
  const [multipleCategorySelect, setMultipleCategorySelect] = React.useState(
    []
  );
  const [multipleImporterSelect, setMultipleImporterSelect] = React.useState(
    []
  );

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

  const [multipleMakerSelect, setMultipleMakerSelect] = React.useState([]);
  const classes = useStyles();

  const handleMultipleCategory = (event) => {
    setMultipleCategorySelect(event.target.value);
  };
  const handleMultipleImporter = (event) => {
    setMultipleImporterSelect(event.target.value);
  };
  const handleMultipleMaker = (event) => {
    setMultipleMakerSelect(event.target.value);
  };

  return (
    <div className={classes.container}>
      {campaignData && (
        <>
          <div className={classes.productBasicInfo}>
            <h3 className={classes.productName}>{campaignData.title}</h3>
            <ul className={classes.brandInfo}>
              <li>
                <span className={classes.brandItem}>
                  <Person />
                  {campaignData.brand}
                </span>
              </li>
              <li>
                <span className={classes.brandItem}>
                  <LocalOffer />
                  {campaignData.category}
                </span>
              </li>
            </ul>
          </div>
          <GridContainer className={classes.detailInfo}>
            <GridItem xs={12} sm={7} md={7} lg={7}>
              <img src={campaignData.image} className={classes.mainImage} />
            </GridItem>
            <GridItem xs={12} sm={5} md={5} lg={5}>
              <div>
                <p className={classes.labelText}>
                  <EmojiFlagsIcon />
                  Campaign Process
                </p>
                <div className={classes.campaignGoal}>
                  <div className={classes.totalMoney}>
                    <span>
                      Total Money : <b>{campaignData.totalSales}JPY</b>
                    </span>
                  </div>
                  <CustomLinearProgress
                    variant="determinate"
                    color="primary"
                    value={campaignData.goalPercent}
                  />
                  <div className={classes.goalInfo}>
                    <span>
                      Goal: <b>{campaignData.goalPercent}%</b>
                    </span>
                    <span>
                      Placed: <b>{campaignData.placed}</b>
                    </span>
                  </div>
                </div>
                <div>
                  <div className={classes.orderInfo}>
                    <p className={classes.labelText}>
                      <VerifiedUser />
                      Minimum Order ( The minimum units you need to order)
                    </p>
                    <h3 className={classes.valueText}>
                      {campaignData.minAmountPerOrder} Units
                    </h3>
                  </div>
                </div>
                <div className={classes.orderInfo}>
                  <p className={classes.labelText}>
                    <AttachMoney />
                    Minimun Price (For 1000 units)
                  </p>
                  <h3 className={classes.valueText}>
                    {campaignData.unitPriceFor1000} JPY
                  </h3>
                </div>
                <div className={classes.orderInfo}>
                  <p className={classes.labelText}>
                    <Schedule />
                    Remaining Days to order this product
                  </p>
                  <h3 className={classes.valueText}>
                    {campaignData.isStart ? (
                      <>
                        <Schedule /> <b>{campaignData.duration} Days</b>{" "}
                      </>
                    ) : (
                      <b>Not started</b>
                    )}
                  </h3>
                </div>
                <div>
                  <TextField
                    className={classes.orderNumber}
                    id="outlined-error"
                    label="Number Unit Order"
                    defaultValue="10000"
                    variant="outlined"
                  />
                </div>

                <Button color="rose" size="lg" className={classes.marginRight}>
                  Place An Order
                </Button>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12} lg={7}>
                  <div className={classes.section}>
                    <h3 className={classes.sectionTitle}>Description</h3>

                    <p>{campaignData.description}</p>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={12} lg={5}>
                  {/* <h3 className={classes.sectionTitle}>More Info</h3> */}
                  <p>
                    {/* {" "}
                    Temperature zone: <b>Normal</b> */}
                  </p>
                  <p>
                    {/* Acquisition certification <a href="#">Iso-1992</a> */}
                  </p>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </>
      )}
    </div>
  );
}
