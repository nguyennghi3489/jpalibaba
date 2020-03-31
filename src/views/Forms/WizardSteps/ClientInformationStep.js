import React from "react";
import PropTypes from "prop-types";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import PinDrop from "@material-ui/icons/PinDrop";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PictureUpload from "components/CustomUpload/PictureUpload.js";
import CustomInput from "components/CustomInput/CustomInput.js";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  inputAdornment: {
    position: "relative"
  }
};

class ClientInformationStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      firstnameState: "",
      lastname: "",
      lastnameState: "",
      email: "",
      emailState: ""
    };
  }
  sendState() {
    return this.state;
  }
  // function that returns true if value is email, false otherwise
  verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  }
  // function that verifies if a string has a given length or not
  verifyLength(value, length) {
    if (value.length >= length) {
      return true;
    }
    return false;
  }
  change(event, stateName, type, stateNameEqualTo) {
    switch (type) {
      case "email":
        if (this.verifyEmail(event.target.value)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      case "length":
        if (this.verifyLength(event.target.value, stateNameEqualTo)) {
          this.setState({ [stateName + "State"]: "success" });
        } else {
          this.setState({ [stateName + "State"]: "error" });
        }
        break;
      default:
        break;
    }
    this.setState({ [stateName]: event.target.value });
  }
  isValidated() {
    if (
      this.state.firstnameState === "success" &&
      this.state.lastnameState === "success" &&
      this.state.emailState === "success"
    ) {
      return true;
    } else {
      if (this.state.firstnameState !== "success") {
        this.setState({ firstnameState: "error" });
      }
      if (this.state.lastnameState !== "success") {
        this.setState({ lastnameState: "error" });
      }
      if (this.state.emailState !== "success") {
        this.setState({ emailState: "error" });
      }
    }
    return false;
  }
  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Update your information</h4>
        </GridItem>
        <GridItem xs={12} sm={8}>
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Name of Representative Name <small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3)
              // endAdornment: (
              //   <InputAdornment
              //     position="end"
              //     className={classes.inputAdornment}
              //   >
              //     <Face className={classes.inputAdornmentIcon} />
              //   </InputAdornment>
              // )
            }}
          />
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Enterprise Number <small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3)
              // endAdornment: (
              //   <InputAdornment
              //     position="end"
              //     className={classes.inputAdornment}
              //   >
              //     <Face className={classes.inputAdornmentIcon} />
              //   </InputAdornment>
              // )
            }}
          />
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Contact Person<small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3)
              // endAdornment: (
              //   <InputAdornment
              //     position="end"
              //     className={classes.inputAdornment}
              //   >
              //     <Face className={classes.inputAdornmentIcon} />
              //   </InputAdornment>
              // )
            }}
          />
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Contact Email<small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3)
              // endAdornment: (
              //   <InputAdornment
              //     position="end"
              //     className={classes.inputAdornment}
              //   >
              //     <Face className={classes.inputAdornmentIcon} />
              //   </InputAdornment>
              // )
            }}
          />
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Contact Tel<small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3)
              // endAdornment: (
              //   <InputAdornment
              //     position="end"
              //     className={classes.inputAdornment}
              //   >
              //     <Face className={classes.inputAdornmentIcon} />
              //   </InputAdornment>
              // )
            }}
          />
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Password<small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3)
              // endAdornment: (
              //   <InputAdornment
              //     position="end"
              //     className={classes.inputAdornment}
              //   >
              //     <Face className={classes.inputAdornmentIcon} />
              //   </InputAdornment>
              // )
            }}
          />
          <CustomInput
            success={this.state.firstnameState === "success"}
            error={this.state.firstnameState === "error"}
            labelText={
              <span>
                Confirm Password<small>(required)</small>
              </span>
            }
            id="firstname"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              onChange: event => this.change(event, "firstname", "length", 3)
              // endAdornment: (
              //   <InputAdornment
              //     position="end"
              //     className={classes.inputAdornment}
              //   >
              //     <Face className={classes.inputAdornmentIcon} />
              //   </InputAdornment>
              // )
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={10}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <CustomInput
                success={this.state.firstnameState === "success"}
                error={this.state.firstnameState === "error"}
                labelText={
                  <span>
                    Street 1 <small>(required)</small>
                  </span>
                }
                id="firstname"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event =>
                    this.change(event, "firstname", "length", 3)
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={6} md={6} lg={6}>
              <CustomInput
                success={this.state.firstnameState === "success"}
                error={this.state.firstnameState === "error"}
                labelText={
                  <span>
                    Street 2 <small>(required)</small>
                  </span>
                }
                id="firstname"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event =>
                    this.change(event, "firstname", "length", 3)
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={this.state.firstnameState === "success"}
                error={this.state.firstnameState === "error"}
                labelText={
                  <span>
                    Country <small>(required)</small>
                  </span>
                }
                id="firstname"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event =>
                    this.change(event, "firstname", "length", 3)
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={this.state.firstnameState === "success"}
                error={this.state.firstnameState === "error"}
                labelText={
                  <span>
                    City <small>(required)</small>
                  </span>
                }
                id="firstname"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event =>
                    this.change(event, "firstname", "length", 3)
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                success={this.state.firstnameState === "success"}
                error={this.state.firstnameState === "error"}
                labelText={
                  <span>
                    Postal Code <small>(required)</small>
                  </span>
                }
                id="firstname"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  onChange: event =>
                    this.change(event, "firstname", "length", 3)
                }}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    );
  }
}

ClientInformationStep.propTypes = {
  classes: PropTypes.object
};

export default withStyles(style)(ClientInformationStep);
