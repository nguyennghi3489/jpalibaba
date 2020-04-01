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
import InputAdornment from "@material-ui/core/InputAdornment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardText from "components/Card/CardText.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import JPProductItem from "../../Components/Product/JPProductItem";

import styles from "./OrderPageStyle.js";

import product1 from "assets/img/product-1.jpg";
import product2 from "assets/img/product-2.jpg";
import product3 from "assets/img/product-3.jpg";
import product4 from "assets/img/product-4.jpeg";
import product5 from "assets/img/product-5.jpg";
import product6 from "assets/img/product-6.jpg";
import product7 from "assets/img/product-7.jpg";
import product8 from "assets/img/product-8.jpeg";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(styles);

export default function OrderPage() {
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
      <br />
      <GridContainer>
        <GridItem xs={12} sm={6} md={9} lg={9}>
          <Card className={classes.card}>
            {/* <CardHeader color="rose" text>
              <CardText color="rose">
                <h4 className={classes.cardTitle}>Order Detail Information</h4>
              </CardText>
            </CardHeader> */}
            <CardBody>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse at aliquet tortor. Ut tempus tellus nisl, ac mollis
                nunc luctus nec. Ut libero nunc, dignissim ut condimentum sed,
                scelerisque placerat orci. In hac habitasse platea dictumst.
                Quisque sollicitudin condimentum tincidunt. Integer urna quam,
                auctor eu rhoncus et, tincidunt in dui. Morbi quis condimentum
                est. Morbi ac ultricies urna. Duis vitae nulla lacinia,
                convallis purus vel, tempor arcu. In auctor lectus tortor. Proin
                suscipit sem et ligula blandit sollicitudin.
              </Typography>
              <TextField
                className={classes.orderNumber}
                id="outlined-error"
                label="Number Unit "
                defaultValue="10000"
                variant="outlined"
              />
              <Typography variant="body2" color="textSecondary" component="p">
                Discount for your account is 20%
              </Typography>
              <h3 className={classes.totalPrice}>
                Total Price : <b>500.000.000 JPY</b>
              </h3>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="rose" text>
              <CardText color="rose">
                <h4 className={classes.cardTitle}>Shipping Information</h4>
              </CardText>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={7}>
                  <CustomInput
                    labelText="Contact Name"
                    id="streetno"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={3}>
                  <CustomInput
                    labelText="Phone"
                    id="streetname"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={3}>
                  <CustomInput
                    labelText="Street No."
                    id="streetno"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={7}>
                  <CustomInput
                    labelText="Street Name"
                    id="streetname"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3} lg={3}>
          <GridItem xs={12} sm={12}>
            <JPProductItem
              productImage={product8}
              title={
                "The definitive version of an upside-down umbrella that can behave smartly because of the rain when dining, traveling, or traveling!"
              }
            />
          </GridItem>
          <GridItem xs={12} sm={12}>
            <Button color="rose" size="lg" className={classes.marginRight}>
              Submit your Order
            </Button>
          </GridItem>
        </GridItem>
      </GridContainer>
    </div>
  );
}
