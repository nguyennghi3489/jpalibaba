// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/views/homePageStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { getPublicCampaign } from "provider/actions";
import { getAgencyIdSelector, getPublicCampaignListSelector } from "provider/selectors";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JPProductItem from "../Components/Product/JPProductItem";

const useStyles = makeStyles(styles);

function HomePage({ getPublicCampaign, rawCampaigns, agencyId }) {
  const [campaigns, setCampaigns] = useState([])
  useEffect(() => {
    getPublicCampaign();
    // eslint-disable-next-line
  }, [getPublicCampaign]);

  useEffect(()=>{
    if(rawCampaigns){
      setCampaigns(rawCampaigns.map(item => item.toPublicCampaignItem(agencyId)))
    }
  },[rawCampaigns])

  

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3 className={classes.categoryTitle}>Hot Products</h3>
      <GridContainer>
        {campaigns.length > 0 &&
          campaigns.map((item) => (
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <JPProductItem
                data={item}
                productImage={item}
              />
            </GridItem>
          ))}
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  rawCampaigns: getPublicCampaignListSelector(state),
  agencyId: getAgencyIdSelector(state),
});

export default connect(
  mapStateToProps,
  { getPublicCampaign }
)(HomePage);
