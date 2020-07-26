import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authenticate } from "provider/actions/authentication";
import { getErrorSelector } from "provider/selectors";
import { appUrl } from "routing";
import { validate, LoginSchema } from "helpers";
import { ValidationError } from "yup";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import { NavLink } from "react-router-dom";
import Icon from "@material-ui/core/Icon";
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
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";
import { DEFAULT_MAX_LENGTH } from "constant";

const useStyles = makeStyles(styles);

function LoginPage({ authenticate, error, history }) {
  const [validateResult, setValidateResult] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  const login = async () => {
    const validateResult = await validate({ email, password }, LoginSchema);
    if (validateResult instanceof ValidationError) {
      setValidateResult(validateResult);
    } else {
      setValidateResult("");
      authenticate(email.trim(), password);
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login>
              <CardBody>
                <CustomInput
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    inputProps: {
                      maxLength: DEFAULT_MAX_LENGTH,
                    },
                    value: email,
                    onChange: handleEmailChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                    autoComplete: "off",
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    value: password,
                    onChange: handlePasswordChange,
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                  }}
                />
                {validateResult &&
                  validateResult.errors.map((item) => <Danger>{item}</Danger>)}
                <Danger>{error}</Danger>
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button color="rose" size="lg" block onClick={login}>
                  Login
                </Button>
              </CardFooter>
              <CardFooter className={classes.justifyContentCenter}>
                <p>
                  Want to be a Retailer or Distributer{" "}
                  <NavLink to={appUrl.signupPage}>
                    <b>Sign Up</b>
                  </NavLink>{" "}
                  here
                </p>
              </CardFooter>
              <CardFooter className={classes.justifyContentCenter}>
                <p>
                  <NavLink to={appUrl.forgotPasswordPage}>
                    <b>Forgot your password?</b>
                  </NavLink>
                </p>
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
const ConnectedLoginPage = connect(
  mapStateToProps,
  { authenticate }
)(withRouter(LoginPage));

export default ConnectedLoginPage;
