import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import { Cached } from "@material-ui/icons";

import { getPublicCampaignsApi } from "provider/apis";
import { getPublicCampaign } from "provider/actions";
import { Campaign } from "provider/models";
import {
  getAgencyIdSelector,
  getPublicCampaignListSelector,
} from "provider/selectors";
import { DEFAULT_CAMPAIGN_PER_PAGE } from "constant";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import JPProductItem from "../Components/Product/JPProductItem";
import { enhanceUrlWithPagination } from "helpers";

import styles from "assets/jss/material-dashboard-pro-react/views/homePageStyle.js";

const useStyles = makeStyles(styles);

function HomePage({ getPublicCampaign, rawCampaigns, agencyId }) {
  const [campaigns, setCampaigns] = useState([]);
  const [total, setTotal] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loadmoreActive, setLoadmoreActive] = useState(false);
  
  useEffect(() => {
    const fetchCampaigns = async () => {
      const newQuery = enhanceUrlWithPagination("", offset, DEFAULT_CAMPAIGN_PER_PAGE)
      const data = await getPublicCampaignsApi(newQuery);
      const campaigns = data.campaigns.entities.map(
        (item) => new Campaign(item)
      );
      setTotal(data.campaigns?.totalCount ?? 0)
      setCampaigns(campaigns.map(item => item.toPublicCampaignItem()));

    };
    fetchCampaigns();
  }, []);

  const loadMore = async () => {
    const newQuery = enhanceUrlWithPagination("", offset + DEFAULT_CAMPAIGN_PER_PAGE, DEFAULT_CAMPAIGN_PER_PAGE)
    setOffset(offset + DEFAULT_CAMPAIGN_PER_PAGE)
    setLoadmoreActive(true)
    const data = await getPublicCampaignsApi(newQuery);
    setLoadmoreActive(false)
    const moreCampaigns = data.campaigns.entities.map(
      (item) => new Campaign(item)
    ).map(item => item.toPublicCampaignItem())
    setCampaigns([...campaigns, ...moreCampaigns]);
  }


  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h3 className={classes.categoryTitle}>Campaigns</h3>
      <GridContainer>
        {campaigns.length > 0 &&
          campaigns.map((item) => (
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <JPProductItem data={item} productImage={item} />
            </GridItem>
          ))}
      </GridContainer>
      {total > campaigns.length && <GridContainer justify="center">
        {loadmoreActive ? <Cached className="loading" color="action"></Cached>: <Button variant="contained" onClick={loadMore}>Load More</Button>}
      </GridContainer> }
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
