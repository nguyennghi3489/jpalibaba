import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import product1 from "assets/img/product-1.jpg";

const useStyles = makeStyles(styles);

export default function CreateNewPricePolicy() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            {/* <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Add />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Add Price Policy</h4>
            </CardHeader> */}
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={4}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Choose Campaign
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select",
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem,
                        }}
                      >
                        Country
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        France
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="3"
                      >
                        Romania
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={4}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Choose Retailer
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select",
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem,
                        }}
                      >
                        Normal
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        France
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="3"
                      >
                        Romania
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={12}>
                  <img src={product1} className={classes.mainImage} alt="" />
                </GridItem>
                <GridItem xs={12} sm={12}>
                  <Typography variant="h6" component="p">
                    Prin Cube
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    The current price for this product is: <b>100.000 USD</b>
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    Percentage For Achivement: <b>20%</b>
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    Present Order Quantity: <b>1000 orders</b>
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    Remaining days to order: <b>10 days</b>
                  </Typography>
                </GridItem>

                <GridItem xs={12} sm={12}>
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <CustomInput
                        labelText="New Price for this Retailer"
                        id="country"
                        formControlProps={{
                          fullWidth: true,
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </GridItem>
              </GridContainer>
              <Button color="rose" className={classes.createButton}>
                Create Policy
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
