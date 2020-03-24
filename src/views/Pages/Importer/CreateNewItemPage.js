import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Datetime from "react-datetime";

// @material-ui/icons
import Add from "@material-ui/icons/Add";
import Cancel from "@material-ui/icons/Cancel";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardAvatar from "components/Card/CardAvatar.js";
import PictureUpload from "components/CustomUpload/PictureUpload.js";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import productPlaceHolder from "assets/img/product-placeholder.jpeg";
import product1 from "assets/img/product-1.jpg";
import product2 from "assets/img/product-2.jpg";
import product3 from "assets/img/product-3.jpg";
import product4 from "assets/img/product-4.jpeg";

const useStyles = makeStyles(styles);

export default function CreateNewItemPage() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Add />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Add New Product</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12}>
                  <CustomInput
                    labelText="Product Name"
                    id="streetno"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={4}>
                  <CustomInput
                    labelText="Maker"
                    id="streetno"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={4}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Choose Category
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Country
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="2"
                      >
                        France
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
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
                      Choose Temperature zone
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu
                      }}
                      classes={{
                        select: classes.select
                      }}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select"
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem
                        }}
                      >
                        Normal
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="2"
                      >
                        France
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected
                        }}
                        value="3"
                      >
                        Romania
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={5}>
                  <CustomInput
                    labelText="Price"
                    id="streetname"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={5}>
                  <CustomInput
                    labelText="Cerfitication"
                    id="streetname"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>

                <GridItem xs={12} sm={5}>
                  <CustomInput
                    labelText="Movie Url"
                    id="movieUrl"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                {/* <GridItem xs={12} sm={6}>
                  <FormControl fullWidth className={classes.datetime}>
                    <Datetime inputProps={{ placeholder: "Expiration Date" }} />
                  </FormControl>
                </GridItem> */}
                <GridItem xs={12} sm={12}>
                  <CustomInput
                    labelText="Product introduction"
                    id="about-me"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5
                    }}
                  />
                </GridItem>
              </GridContainer>
              <Button color="rose" className={classes.createButton}>
                Create Item
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Main Image</h4>
            </CardHeader>
            <CardBody>
              <PictureUpload image={productPlaceHolder} />
            </CardBody>
          </Card>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Thumbs Image</h4>
            </CardHeader>
            <CardBody>
              <PictureUpload image={productPlaceHolder} title={"Add Thumbs"} />
              <GridContainer>
                <GridItem xs={12} sm={12} md={6} className={classes.thumbs}>
                  <Cancel />
                  <img src={product1} className={classes.img} />
                </GridItem>
                <GridItem xs={12} sm={12} md={6} className={classes.thumbs}>
                  <Cancel />
                  <img src={product2} className={classes.img} />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
