import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import {
  required,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
  convertStateFieldToValidatorField,
} from "helpers";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  inputAdornment: {
    position: "relative",
  },
  actionButton: {
    float: "right",
  },
};

class AddressInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      street1: "",
      ["street1" + fieldStateSuffix]: FieldValidateStatus.Success,
      ["street1" + fieldValidatorSuffix]: [required],
      street2: "",
      ["street2" + fieldStateSuffix]: FieldValidateStatus.Success,
      country: "",
      ["country" + fieldStateSuffix]: FieldValidateStatus.Success,
      ["country" + fieldValidatorSuffix]: [required],
      city: "",
      ["city" + fieldStateSuffix]: FieldValidateStatus.Success,
      ["city" + fieldValidatorSuffix]: [required],
      postalCode: "",
      ["postalCode" + fieldStateSuffix]: FieldValidateStatus.Success,
      ["postalCode" + fieldValidatorSuffix]: [required],
    };
  }

  componentDidMount() {
    const data = {
      street1: "A",
      street2: "B",
      country: "C",
      city: "D",
      postalCode: "E",
    };

    for (let key in data) {
      console.log(key);
      this.setState({ [key]: data[key] });
    }
  }

  fileChange = (value, stateName) => {
    this.setState({ [stateName]: value.target.files[0] });
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

  update = () => {
    if (this.isValidated()) {
      this.props.onUpdate("a", this.state);
    }
  };

  render() {
    const { classes, title } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <h3>{title}</h3>
        </GridItem>

        <GridItem xs={12} sm={6} md={6} lg={6}>
          <CustomInput
            // success={this.state.street1FState === FieldValidateStatus.Success}
            error={this.state.street1FState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Street 1 <small>(required)</small>
              </span>
            }
            id="street1"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) => this.change(event.target.value, "street1"),
              value: this.state.street1,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <CustomInput
            // success={this.state.street12FState === FieldValidateStatus.Success}
            error={this.state.street12FState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Street 2 <small>(required)</small>
              </span>
            }
            id="street2"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) => this.change(event.target.value, "street2"),
              value: this.state.street2,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4}>
          <CustomInput
            // success={this.state.countryFState === FieldValidateStatus.Success}
            error={this.state.countryFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Country <small>(required)</small>
              </span>
            }
            id="country"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) => this.change(event.target.value, "country"),
              value: this.state.country,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4}>
          <CustomInput
            // success={this.state.cityFState === FieldValidateStatus.Success}
            error={this.state.cityFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                City <small>(required)</small>
              </span>
            }
            id="city"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) => this.change(event.target.value, "city"),
              value: this.state.city,
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={4}>
          <CustomInput
            // success={
            //   this.state.postalCodeFState === FieldValidateStatus.Success
            // }
            error={this.state.postalCodeFState === FieldValidateStatus.Fail}
            labelText={
              <span>
                Postal Code <small>(required)</small>
              </span>
            }
            id="postalCodeFState"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              onChange: (event) =>
                this.change(event.target.value, "postalCodeFState"),
              value: this.state.postalCodeFState,
            }}
          />
        </GridItem>
        <GridItem xs={12} md={12}>
          <Button
            color="rose"
            className={classes.actionButton}
            onClick={this.update}
          >
            Update
          </Button>
        </GridItem>
      </GridContainer>
    );
  }
}

AddressInfo.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(AddressInfo);
