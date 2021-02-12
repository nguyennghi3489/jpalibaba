// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AttachMoney from "@material-ui/icons/AttachMoney";
// @material-ui/icons
import EmojiFlagsIcon from "@material-ui/icons/Flag";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Person from "@material-ui/icons/Person";
import Schedule from "@material-ui/icons/Schedule";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Button from "components/CustomButtons/Button.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import { DurationView } from "components/DurationView";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { formatCurrency } from "helpers";
import { getCampaignByIdApi } from "provider/apis";
import { Campaign } from "provider/models/campaign";
import { getAgencyIdSelector } from "provider/selectors";
import React, { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { OrderBox } from "./OrderBox.js";
import styles from "./ProductDetailPageStyle.js";
const useStyles = makeStyles(styles);

function ProductDetailPage(props) {
  let history = useHistory();
  const [campaignData, setCampaignData] = useState(null);
  const { agencyId } = props;

  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;
    const fetch = async () => {
      const data = await getCampaignByIdApi(id);
      const campaignDetail = new Campaign(data.campaign);
      console.log(campaignDetail.toPublicCampaignDetailItem(agencyId));
      setCampaignData(campaignDetail.toPublicCampaignDetailItem(agencyId));
    };
    fetch();
    // eslint-disable-next-line
  }, [agencyId]);

  const processCampaign = () => {
    history.push("/admin/checkout");
  };

  const classes = useStyles();

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
              <div className={classes.imageContainer}>
                <ImageGallery
                  items={[campaignData.image, ...campaignData.images]}
                />
              </div>
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
                      Total Money :{" "}
                      <b>{formatCurrency(campaignData.totalSales)}</b>
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
                    Minimun Price (For {campaignData.minAmountPerOrder} units)
                  </p>
                  <h3 className={classes.valueText}>
                    {formatCurrency(campaignData.unitPriceFor1000)}
                  </h3>
                </div>
                <div className={classes.orderInfo}>
                  <p className={classes.labelText}>
                    <Schedule />
                    Remaining Days to order this product
                  </p>
                  <h3 className={classes.valueText}>
                    <DurationView
                      showIcon={false}
                      isStarted={campaignData.isStart}
                      duration={campaignData.duration}
                    />
                  </h3>
                </div>
                <OrderBox
                  onActionDone={processCampaign}
                  validOrderNumber={campaignData.minAmountPerOrder}
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <GridContainer className={classes.information}>
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

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
});

export default connect(
  mapStateToProps,
  null
)(ProductDetailPage);
