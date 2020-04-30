import React from "react";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import PictureUpload from "components/CustomUpload/PictureUpload";
import CollectionUpload from "components/CustomUpload/CollectionUpload";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import productPlaceHolder from "assets/img/product-placeholder.jpeg";
import { addProduct } from "actions";
import {
  required,
  isInputValidated,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
  onInputChange,
  equalField,
  convertStateFieldToValidatorField,
} from "helpers";

const useStyles = makeStyles(styles);

class CreateNewItemPage extends React.Component {
  state = {
    companyName: "",
    ["companyName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["companyName" + fieldValidatorSuffix]: [required],
    maker: "",
    ["maker" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["maker" + fieldValidatorSuffix]: [required],
    price: "",
    ["price" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["price" + fieldValidatorSuffix]: [required],
    certification: "",
    movieUrl: "",
    introduction: "",
    aboutMe: "",
    mainImage: null,
    imageThumbs: [],
  };

  onMainUpload = (file) => {
    this.setState({ mainImage: file });
  };

  onThumbsUpload = (file) => {
    const thumbs = Object.assign([], this.state.imageThumbs);
    thumbs.push(file);
    this.setState({ imageThumbs: thumbs });
  };

  change = (value, stateName) => {
    const validatorField = stateName + fieldValidatorSuffix;
    const validators = this.state[validatorField];
    if (validators) {
      const validateValue = validators.reduce((result, fn) => {
        if (typeof fn === "function") {
          return result && fn(value);
        }
        return result && fn[0](this.state[fn[1]])(value);
      }, true);
      if (validateValue) {
        this.setState({
          [stateName + fieldStateSuffix]: FieldValidateStatus.Success,
        });
      } else {
        this.setState({
          [stateName + fieldStateSuffix]: FieldValidateStatus.Fail,
        });
      }
    } else {
      this.setState({
        companyStreet2FState: FieldValidateStatus.Success,
      });
    }
    this.setState({ [stateName]: value });
  };

  isValidated = () => {
    let flag = true;

    const validatingStateFields = getFormStateField(this.state);
    for (const index in validatingStateFields) {
      const obj = validatingStateFields[index];
      const value = Object.values(obj)[0];
      const key = Object.keys(obj)[0];
      const validatorField = convertStateFieldToValidatorField(key);
      const validators = this.state[validatorField];
      if (value !== FieldValidateStatus.Success && validators) {
        this.setState({ [key]: FieldValidateStatus.Fail });
        flag = false;
      }
    }
    return flag;
  };

  submit = () => {
    if (this.isValidated() && this.state.mainImage) {
      this.props.addProduct(this.state);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <CustomInput
                      success={
                        this.state.companyNameFState ===
                        FieldValidateStatus.Success
                      }
                      error={
                        this.state.companyNameFState ===
                        FieldValidateStatus.Fail
                      }
                      labelText={
                        <span>
                          Product Name <small>(required)</small>
                        </span>
                      }
                      id="companyName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (event) =>
                          this.change(event.target.value, "companyName"),
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      success={
                        this.state.makerFState === FieldValidateStatus.Success
                      }
                      error={
                        this.state.makerFState === FieldValidateStatus.Fail
                      }
                      labelText={
                        <span>
                          Maker <small>(required)</small>
                        </span>
                      }
                      id="maker"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (event) =>
                          this.change(event.target.value, "maker"),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
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
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Choose Temperature zone
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
                  <GridItem xs={12} sm={5}>
                    <CustomInput
                      success={
                        this.state.priceFState === FieldValidateStatus.Success
                      }
                      error={
                        this.state.priceFState === FieldValidateStatus.Fail
                      }
                      labelText={
                        <span>
                          Price <small>(required)</small>
                        </span>
                      }
                      id="price"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (event) =>
                          this.change(event.target.value, "price"),
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={5}>
                    <CustomInput
                      labelText="Cerfitication"
                      id="certification"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (event) =>
                          this.change(event.target.value, "certification"),
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={5}>
                    <CustomInput
                      labelText="Movie Url"
                      id="movieUrl"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        onChange: (event) =>
                          this.change(event.target.value, "movieUrl"),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12}>
                    <CustomInput
                      labelText="Product introduction"
                      id="aboutMe"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        onChange: (event) =>
                          this.change(event.target.value, "aboutMe"),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Button
                  color="rose"
                  className={classes.createButton}
                  onClick={this.submit}
                >
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
                <PictureUpload
                  showImage={true}
                  image={productPlaceHolder}
                  onUpload={this.onMainUpload}
                />
              </CardBody>
            </Card>
            <Card>
              <CardHeader color="primary" icon>
                <h4 className={classes.cardIconTitle}>Thumbs Image</h4>
              </CardHeader>
              <CardBody>
                <CollectionUpload onUpload={this.onThumbsUpload} />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default connect(
  null,
  { addProduct }
)(withStyles(styles)(CreateNewItemPage));
