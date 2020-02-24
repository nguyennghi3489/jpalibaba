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

import styles from "assets/jss/material-dashboard-pro-react/views/homePageStyle.js";

import priceImage1 from "assets/img/card-2.jpeg";
import priceImage2 from "assets/img/card-3.jpeg";
import priceImage3 from "assets/img/card-1.jpeg";

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
                          Choose Category
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Category A
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Category B
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
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
                          Choose Importer/Distributor
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Importer A
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Importer B
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
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
                          Choose Maker
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="2"
                        >
                          Maker A
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
                          }}
                          value="3"
                        >
                          Maker B
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected
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
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Minimum Price"
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      id="md4"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        placeholder: "Maximum Price"
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
          <Card product>
            <CardHeader image>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={priceImage1} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Cozy 5 Stars Apartment
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to {'"'}Naviglio{'"'} enjoy the main night
                life.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$899/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Barcelona, Spain
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <Card product>
            <CardHeader image>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={priceImage2} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Office Studio
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                The place is close to Metro Station and bus stop just 2 min by
                walk and near to {'"'}Naviglio{'"'} where you can enjoy the
                night life in London, UK.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$1.119/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> London, UK
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <Card product>
            <CardHeader image>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={priceImage3} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Beautiful Castle
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                The place is close to Metro Station and bus stop just 2 min by
                walk and near to {'"'}Naviglio{'"'} where you can enjoy the main
                night life in Milan.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$459/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Milan, Italy
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} lg={3}>
          <Card product>
            <CardHeader image>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={priceImage1} alt="..." />
              </a>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Cozy 5 Stars Apartment
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to {'"'}Naviglio{'"'} where you can enjoy the
                main night life.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$899/night</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <Place /> Barcelona, Spain
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
