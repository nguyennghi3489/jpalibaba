import React from "react";
import { connect } from "react-redux";
import moment from "moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Datetime from "react-datetime";

import { addCampaign } from "provider/actions";

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

class CreateNewCampaignPage extends React.Component {
  state = {
    campaignName: "",
    ["campaignName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["campaignName" + fieldValidatorSuffix]: [required],
    productId: "",
    ["productId" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    // ["productId" + fieldValidatorSuffix]: [required],
    categoryId: "",
    ["categoryId" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    // ["categoryId" + fieldValidatorSuffix]: [required],
    minimumOrderlot: "",
    ["minimumOrderlot" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["minimumOrderlot" + fieldValidatorSuffix]: [required],
    minimumOrderToImport: "",
    ["minimumOrderToImport" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["minimumOrderToImport" + fieldValidatorSuffix]: [required],
    startDate: "",
    endDate: "",
    campaignIntro: "",
    ["campaignIntro" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["campaignIntro" + fieldValidatorSuffix]: [required],
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

  createCampaign = () => {
    if (this.isValidated()) {
      this.props.addCampaign(this.state);
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
                  <GridItem xs={12} sm={8}>
                    <CustomInput
                      labelText="Campaign Name"
                      id="campaignName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      success={
                        this.state.campaignNameFState ===
                        FieldValidateStatus.Success
                      }
                      error={
                        this.state.campaignNameFState ===
                        FieldValidateStatus.Fail
                      }
                      inputProps={{
                        onChange: (event) =>
                          this.change(event.target.value, "campaignName"),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        required
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Choose Product
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
                        value={this.state.productId}
                        onChange={(event) =>
                          this.setState({ productId: event.target.value })
                        }
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
                        required
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
                        value={this.state.categoryId}
                        onChange={(event) =>
                          this.setState({ categoryId: event.target.value })
                        }
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
                    <CustomInput
                      labelText="Minimum individual order lot"
                      id="minimumOrderlot"
                      formControlProps={{
                        fullWidth: true,
                        type: "number",
                      }}
                      success={
                        this.state.minimumOrderlotFState ===
                        FieldValidateStatus.Success
                      }
                      error={
                        this.state.minimumOrderlotFState ===
                        FieldValidateStatus.Fail
                      }
                      inputProps={{
                        type: "number",
                        onChange: (event) =>
                          this.change(event.target.value, "minimumOrderlot"),
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      labelText="Minimun order to import"
                      id="minimumOrderToImport"
                      formControlProps={{
                        fullWidth: true,
                        type: "number",
                      }}
                      success={
                        this.state.minimumOrderToImportFState ===
                        FieldValidateStatus.Success
                      }
                      error={
                        this.state.minimumOrderToImportFState ===
                        FieldValidateStatus.Fail
                      }
                      inputProps={{
                        type: "number",
                        onChange: (event) =>
                          this.change(
                            event.target.value,
                            "minimumOrderToImport"
                          ),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <FormControl fullWidth className={classes.datetime}>
                      <Datetime
                        id="startDate"
                        required
                        inputProps={{ placeholder: "Start Date" }}
                        // value={moment()}
                        onChange={(value) =>
                          this.setState({ startDate: value })
                        }
                      />
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                    <FormControl fullWidth className={classes.datetime}>
                      <Datetime
                        id="endDate"
                        inputProps={{ placeholder: "Expiration Date" }}
                        onChange={(value) => this.setState({ endDate: value })}
                      />
                    </FormControl>
                  </GridItem>

                  <GridItem xs={12} sm={12}>
                    <CustomInput
                      labelText="Campaign introduction"
                      id="campaignIntro"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      success={
                        this.state.campaignIntroFState ===
                        FieldValidateStatus.Success
                      }
                      error={
                        this.state.campaignIntroFState ===
                        FieldValidateStatus.Fail
                      }
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        onChange: (event) =>
                          this.change(event.target.value, "campaignIntro"),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Button
                  color="rose"
                  className={classes.createButton}
                  onClick={this.createCampaign}
                >
                  Create Campaign
                </Button>
                <Clearfix />
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
  { addCampaign }
)(withStyles(styles)(CreateNewCampaignPage));
