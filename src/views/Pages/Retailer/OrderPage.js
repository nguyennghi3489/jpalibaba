// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import product8 from "assets/img/product-8.jpeg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import JPProductItem from "../../Components/Product/JPProductItem";
import styles from "./OrderPageStyle.js";

const useStyles = makeStyles(styles);

export default function OrderPage() {
  const [multipleCategorySelect, setMultipleCategorySelect] = useState([]);
  const [multipleImporterSelect, setMultipleImporterSelect] = useState([]);

  const [multipleMakerSelect, setMultipleMakerSelect] = useState([]);
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
