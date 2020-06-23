import React from "react";
import Datetime from "react-datetime";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
// import Weekend from "@material-ui/icons/Weekend";
import FilterList from "@material-ui/icons/FilterList";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import CustomInput from "components/CustomInput/CustomInput.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";

import JPProductItem from "../../Components/Product/JPProductItem";

import styles from "assets/jss/material-dashboard-pro-react/views/searchPageStyle.js";

import product1 from "assets/img/product-1.jpg";
import product2 from "assets/img/product-2.jpg";
import product3 from "assets/img/product-3.jpg";
import product4 from "assets/img/product-4.jpeg";
import product5 from "assets/img/product-5.jpg";
import product6 from "assets/img/product-6.jpg";
import product7 from "assets/img/product-7.jpg";
import product8 from "assets/img/product-8.jpeg";

const useStyles = makeStyles(styles);

export default function SearchPage() {
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <FilterList />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Search Your Items</h4>
            </CardHeader>
            <CardBody>
              <form>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Choose Category
                      </InputLabel>
                      <Select
                        multiple
                        value={multipleCategorySelect}
                        onChange={handleMultipleCategory}
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
                          Choose Category
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          Category A
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          Category B
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="4"
                        >
                          Category C
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Choose Importer/Distributor
                      </InputLabel>
                      <Select
                        multiple
                        value={multipleImporterSelect}
                        onChange={handleMultipleImporter}
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
                          Choose Importer/Distributor
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          Importer A
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          Importer B
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="4"
                        >
                          Importer C
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4} lg={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Choose Maker
                      </InputLabel>
                      <Select
                        multiple
                        value={multipleMakerSelect}
                        onChange={handleMultipleMaker}
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
                          Choose Maker
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="2"
                        >
                          Maker A
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="3"
                        >
                          Maker B
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="4"
                        >
                          Maker C
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      id="md3"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Minimum Price",
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      id="md4"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        placeholder: "Maximum Price",
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <FormControl className={classes.formControl} fullWidth>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "From Date " }}
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <FormControl className={classes.formControl} fullWidth>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "To Date" }}
                      />
                    </FormControl>
                  </GridItem>
                </GridContainer>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <br />
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
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product5}
            title={
              "PrinCube-The world's smallest mobile color printer landing in Japan!"
            }
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product6}
            title={
              "A candle warmer that is healed by the scent and light, mix and enjoy your own scent!"
            }
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product7}
            title={"Extended by 3 weeks due to popularity! "}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <JPProductItem
            productImage={product8}
            title={
              "The definitive version of an upside-down umbrella that can behave smartly because of the rain when dining, traveling, or traveling!"
            }
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
