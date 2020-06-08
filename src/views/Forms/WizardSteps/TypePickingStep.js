import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Radio from "@material-ui/core/Radio";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px",
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch,
};

class TypePickingStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      importer: true,
    };
  }
  sendState() {
    return this.state;
  }

  handleImporterPick = () => {
    this.setState({ importer: true });
  };

  handleRetailerPick = () => {
    this.setState({ importer: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.infoText}>
          Pick your type of customer you want to create
        </h4>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <GridContainer>
              <GridItem xs={12} sm={6}>
                <div className={classes.choiche}>
                  <Radio
                    checked={this.state.importer}
                    tabIndex={-1}
                    onClick={this.handleImporterPick}
                    checkedIcon={
                      <i
                        className={
                          "fas fa-warehouse " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    icon={
                      <i
                        className={
                          "fas fa-warehouse " + classes.iconCheckboxIcon
                        }
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox,
                    }}
                  />
                  <h6>Distributor/ Importer</h6>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6}>
                <div className={classes.choiche}>
                  <Radio
                    checked={!this.state.importer}
                    tabIndex={-1}
                    onClick={this.handleRetailerPick}
                    checkedIcon={
                      <i
                        className={"fas fa-users " + classes.iconCheckboxIcon}
                      />
                    }
                    icon={
                      <i
                        className={"fas fa-users " + classes.iconCheckboxIcon}
                      />
                    }
                    classes={{
                      checked: classes.iconCheckboxChecked,
                      root: classes.iconCheckbox,
                    }}
                  />
                  <h6>Retailer</h6>
                </div>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

TypePickingStep.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(TypePickingStep);
