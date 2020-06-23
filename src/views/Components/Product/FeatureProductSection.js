import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import JPProductItem from "../../Components/Product/JPProductItem";

import product2 from "assets/img/product-2.jpg";
import product5 from "assets/img/product-5.jpg";
import product6 from "assets/img/product-6.jpg";
import product7 from "assets/img/product-7.jpg";
import product8 from "assets/img/product-8.jpeg";

import styles from "./JPProductItemStyle.js";

const useStyles = makeStyles(styles);

export default function FeatureProductSection({ productImage, title }) {
  const classes = useStyles();

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4} lg={6}>
          <JPProductItem
            featureBigProduct={true}
            productImage={product2}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            title={
              "A candle warmer that is healed by the scent and light, mix and enjoy your own scent!"
            }
          />
        </GridItem>
        <GridItem xs={12} sm={12} lg={6}>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6} lg={6}>
              <JPProductItem
                featureSmallProduct={true}
                productImage={product5}
                title={
                  "A candle warmer that is healed by the scent and light, mix and enjoy your own scent!"
                }
              />
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6}>
              <JPProductItem
                featureSmallProduct={true}
                productImage={product6}
                title={
                  "A candle warmer that is healed by the scent and light, mix and enjoy your own scent!"
                }
              />
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6}>
              <JPProductItem
                featureSmallProduct={true}
                productImage={product7}
                title={
                  "A candle warmer that is healed by the scent and light, mix and enjoy your own scent!"
                }
              />
            </GridItem>
            <GridItem xs={6} sm={6} md={6} lg={6}>
              <JPProductItem
                featureSmallProduct={true}
                productImage={product8}
                title={
                  "A candle warmer that is healed by the scent and light, mix and enjoy your own scent!"
                }
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
