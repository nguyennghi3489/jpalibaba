// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { clientSignup } from "actions";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
// core components
import AddressInformation from "./AddressInformation";

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
      // console.log("DO IT");
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
    return <AddressInformation sendState={this.sendState} />;
  }
}

ClientInformationStep.propTypes = {
  classes: PropTypes.object,
};

export default connect(
  null,
  { clientSignup }
)(withStyles(style)(ClientInformationStep));
