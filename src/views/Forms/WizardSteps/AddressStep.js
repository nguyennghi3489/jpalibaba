import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { clientSignup } from "actions";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Box from "@material-ui/core/Box";

// core components
import AddresInformation from "./AddresInformation";
import RetailerAddressInformation from "./RetailerAddressInformation";
import {
  convertStateFieldToValidatorField,
  required,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
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
};

class ClientInformationStep extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps) {
    const {
      allStates: { account },
    } = this.props;
    const {
      allStates: { prevAccount },
    } = prevProps;

    if (account && account.importerType) {
      console.log("DO IT");
    }
  }

  sendState() {
    return this.state;
  }

  isValidated = () => {
    return false;
  };

  render() {
    const { classes } = this.props;
    return <AddresInformation sendState={this.sendState} />;
  }
}

ClientInformationStep.propTypes = {
  classes: PropTypes.object,
};

export default connect(
  null,
  { clientSignup }
)(withStyles(style)(ClientInformationStep));
