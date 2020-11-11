// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-pro-react/views/homePageStyle.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { getPublicCampaigns } from "provider/actions";
import { getPublicCampaignListSelector } from "provider/selectors";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import JPProductItem from "../Components/Product/JPProductItem";

const useStyles = makeStyles(styles);

function HomePage({ getPublicCampaigns, campaigns }) {
  useEffect(() => {
    getPublicCampaigns();
    // eslint-disable-next-line
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <FeatureProductSection /> */}
      <h3 className={classes.categoryTitle}>Hot Products</h3>
      <GridContainer>
        {campaigns.length > 0 &&
          campaigns.map((item) => (
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <JPProductItem
                data={item.toPublicCampaignItem()}
                productImage={item}
                title={
                  "PrinCube-The world's smallest mobile color printer landing in Japan!"
                }
              />
            </GridItem>
          ))}
        {/* <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product1}
            title={
              "PrinCube-The world's smallest mobile color printer landing in Japan!"
            }
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product2}
            title={
              "A candle warmer that is healed by the scent and light, mix and enjoy your own scent!"
            }
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product3}
            title={"Extended by 3 weeks due to popularity! "}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product4}
            title={
              "The definitive version of an upside-down umbrella that can behave smartly because of the rain when dining, traveling, or traveling!"
            }
          />
        </GridItem> */}
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  campaigns: getPublicCampaignListSelector(state),
});

export default connect(
  mapStateToProps,
  { getPublicCampaigns }
)(HomePage);
