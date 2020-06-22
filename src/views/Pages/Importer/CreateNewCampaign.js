import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getProducts, addCampaign } from "provider/actions";
import {
  getAgencyIdSelector,
  getProductList,
  getUserIdSelector,
} from "provider/selectors";
import { parseNewCampaign } from "helpers";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Datetime from "react-datetime";

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

  componentDidMount() {
    const { agencyId } = this.props;
    this.props.getProducts({ agencyId, limit: 20, offset: 0 });
  }

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
    console.log(this.state);
    const { agencyId, userId } = this.props;
    if (this.isValidated()) {
      this.props.addCampaign(parseNewCampaign(this.state, agencyId, userId));
    }
  };

  render() {
    const { classes, products } = this.props;
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
                      error={
                        this.state.campaignNameFState ===
                        FieldValidateStatus.Fail
                      }
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
                          Product
                        </MenuItem>
                        {products.map((item) => (
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value={item.id}
                          >
                            {item.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                      error={
                        this.state.campaignNameFState ===
                        FieldValidateStatus.Fail
                      }
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
                          Category
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="Food"
                        >
                          Food
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="ElectronicDevice"
                        >
                          ElectronicDevice
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

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
  userId: getUserIdSelector(state),
  products: getProductList(state),
});
export default connect(
  mapStateToProps,
  { addCampaign, getProducts }
)(withStyles(styles)(CreateNewCampaignPage));
