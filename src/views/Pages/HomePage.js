import React from "react";
import Datetime from "react-datetime";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import MailOutline from "@material-ui/icons/MailOutline";
import FilterList from "@material-ui/icons/FilterList";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CustomInput from "components/CustomInput/CustomInput.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";
import AdvancedGridList from "../Components/AdvancedGridList";
import JPProductSection from "../Components/JPProductSection";

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

  const handleMultipleCategory = event => {
    setMultipleCategorySelect(event.target.value);
  };
  const handleMultipleImporter = event => {
    setMultipleImporterSelect(event.target.value);
  };
  const handleMultipleMaker = event => {
    setMultipleMakerSelect(event.target.value);
  };

  return (
    <div className={classes.container}>
      {/* <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <AdvancedGridList />
        </GridItem>
      </GridContainer> */}
      {/* <br />
      <JPProductSection />
      <br /> */}
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
