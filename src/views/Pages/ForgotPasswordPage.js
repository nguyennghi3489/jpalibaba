import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
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

import { required, verifyEmail } from "helpers";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import { DEFAULT_MAX_LENGTH } from "constant";
import { authenticationSlice } from "provider/actions/slice/authentication";

const useStyles = makeStyles(styles);

function ForgotPasswordPage({ forgotPassword }) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const classes = useStyles();

  const forgotPasswordCall = (event) => {
    if (verifyEmail(username) && required(username)) {
      setError(false);
      forgotPassword(username);
    } else {
      setError(true);
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login>
              <CardHeader>
                <h4 className={classes.cardIconTitle}>
                  <small>
                    Enter the email address associated with your Collecport
                    account.
                  </small>
                </h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: username,
                    onChange: handleUsernameChange,
                    inputProps: {
                      maxLength: DEFAULT_MAX_LENGTH,
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    autoComplete: "off",
                  }}
                />
                <Danger>{error && <div>Enter your email address</div>}</Danger>
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button
                  color="rose"
                  size="lg"
                  block
                  onClick={forgotPasswordCall}
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
  { forgotPassword: authenticationSlice.actions.forgotPassword }
)(withRouter(ForgotPasswordPage));
