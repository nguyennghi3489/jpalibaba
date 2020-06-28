import React, { useEffect } from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import { verifyMail } from "provider/actions";
import { verifyMailResultSelector } from "provider/selectors";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

const useStyles = makeStyles(styles);

function VerifySuccessPage({ location, verifyMail, type }) {
  const queryInput = queryString.parse(location.search);
  const { token } = queryInput;
  useEffect(() => {
    verifyMail(token);
  }, []);

  const classes = useStyles();

  const renderResult = (type) => {
    switch (type) {
      case "loading":
        return "Verifying please wait a few seconds.";
      case "success":
        return "Your registration is done. Please wait Admin to process next step.";
      case "failure":
        return "Your link is expired or not correct one.";
      default:
        return "Verifying please wait a few seconds.";
    }
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardBody>
              <h3>Email Confirmation </h3>

              <p>{renderResult(type)}</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  type: verifyMailResultSelector(state),
});

export default connect(
  mapStateToProps,
  { verifyMail }
)(VerifySuccessPage);
