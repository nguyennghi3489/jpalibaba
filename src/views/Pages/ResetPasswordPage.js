import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import { resetPassword } from "provider/actions/authentication";
import { getErrorSelector } from "provider/selectors";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Danger from "components/Typography/Danger.js";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

const useStyles = makeStyles(styles);

function ResetPasswordPage({ resetPassword, location }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const queryInput = queryString.parse(location.search);
  const { token } = queryInput;

  const classes = useStyles();

  const validate = () => {
    if (!password) {
      setError("Please input your new password");
      return false;
    } else if (password !== confirmPassword) {
      setError("Your confirm password does not match");
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const submitNewPassword = () => {
    if (validate()) {
      resetPassword(password, confirmPassword, token);
    }
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login>
              <CardHeader>
                <h4 className={classes.cardIconTitle}>
                  <small>Enter your new password.</small>
                </h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="New Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "password",
                    name: "password",
                    value: password,
                    onChange: handlePasswordChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    autoComplete: "off",
                  }}
                />
                <CustomInput
                  labelText="Confirm New Password"
                  id="confirmPassword"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "password",
                    name: "confirmPassword",
                    value: confirmPassword,
                    onChange: handleConfirmPasswordChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    autoComplete: "off",
                  }}
                />
                <Danger>{error && <div>{error}</div>}</Danger>
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button
                  color="rose"
                  size="lg"
                  block
                  onClick={submitNewPassword}
                >
                  Send
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  error: getErrorSelector(state),
});

export default connect(
  mapStateToProps,
  { resetPassword }
)(withRouter(ResetPasswordPage));
