import React from "react";
import Datetime from "react-datetime";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import JPProductItem from "../Components/Product/JPProductItem";
import FeatureProductSection from "../Components/Product/FeatureProductSection";

import styles from "assets/jss/material-dashboard-pro-react/views/homePageStyle.js";

import product1 from "assets/img/product-1.jpg";
import product2 from "assets/img/product-2.jpg";
import product3 from "assets/img/product-3.jpg";
import product4 from "assets/img/product-4.jpeg";

const useStyles = makeStyles(styles);

export default function HomePage() {
  const [multipleCategorySelect, setMultipleCategorySelect] = React.useState(
    []
  );
  const [multipleImporterSelect, setMultipleImporterSelect] = React.useState(
    []
  );

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
      <FeatureProductSection />
      <h3 className={classes.categoryTitle}>Hot Products</h3>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4} lg={3}>
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
        </GridItem>
      </GridContainer>
    </div>
  );
}
