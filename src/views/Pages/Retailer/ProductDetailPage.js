import React from "react";
import Datetime from "react-datetime";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import Schedule from "@material-ui/icons/Schedule";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Person from "@material-ui/icons/Person";
import LocalOffer from "@material-ui/icons/LocalOffer";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import TextField from "@material-ui/core/TextField";

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

import styles from "./ProductDetailPageStyle.js";

import product1 from "assets/img/product-1.jpg";
import thumb1 from "assets/img/thumb-1.jpg";
import product2 from "assets/img/product-2.jpg";
import product3 from "assets/img/product-3.jpg";
import product4 from "assets/img/product-4.jpeg";

const useStyles = makeStyles(styles);

export default function ProductDetailPage() {
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
      <div className={classes.productBasicInfo}>
        <h3 className={classes.productName}>
          PrinCube-The world's smallest mobile color printer landing in Japan!
        </h3>
        <ul className={classes.brandInfo}>
          <li>
            <span className={classes.brandItem}>
              <Person />
              Sony
            </span>
          </li>
          <li>
            <span className={classes.brandItem}>
              <LocalOffer />
              Electric Devices
            </span>
          </li>
        </ul>
      </div>
      <GridContainer className={classes.detailInfo}>
        <GridItem xs={12} sm={7} md={7} lg={7}>
          <img src={product1} className={classes.mainImage} />
        </GridItem>
        <GridItem xs={12} sm={5} md={5} lg={5}>
          <div>
            <div>
              <div className={classes.orderInfo}>
                <p className={classes.labelText}>
                  <VerifiedUser />
                  Minimum Order ( The minimum units you need to order)
                </p>
                <h3 className={classes.valueText}>1000 Units</h3>
              </div>
            </div>
            <div className={classes.orderInfo}>
              <p className={classes.labelText}>
                <AttachMoney />
                Minimun Price (For 1000 units)
              </p>
              <h3 className={classes.valueText}>5.000.000 JPY</h3>
            </div>
            <div className={classes.orderInfo}>
              <p className={classes.labelText}>
                <Schedule />
                Remaining Days to order this product
              </p>
              <h3 className={classes.valueText}>25 Days</h3>
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

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={5}>
              <h3 className={classes.sectionTitle}>More Info</h3>
              <p>
                {" "}
                Temperature zone: <b>Normal</b>
              </p>
              <p>
                Acquisition certification <a href="#">Iso-1992</a>
              </p>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
