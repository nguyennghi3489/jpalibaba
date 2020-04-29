import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { activeUser } from "actions";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

const useStyles = makeStyles(styles);

function UpdateUserInfo({ activeUser }) {
  const classes = useStyles();
  const [active, setActice] = useState(false);
  const submit = () => {
    activeUser(active);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card profile>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Retailer</h6>
              <h4 className={classes.cardTitle}>Toyto Company</h4>
              <br />
              <p className={classes.cardTitle}>Enterprise Number: 123456</p>
              <p className={classes.cardTitle}>Person In Charge: ABC </p>
              <p className={classes.cardTitle}>nac@gmail.com</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <p>Active Status: </p>
                  <Switch
                    checked={active}
                    onChange={(event) => setActice(event.target.checked)}
                    value="active"
                    classes={{
                      switchBase: classes.switchBase,
                      checked: classes.switchChecked,
                      thumb: classes.switchIcon,
                      track: classes.switchBar,
                    }}
                  />
                </GridItem>
              </GridContainer>
              <div className={classes.actionSection}>
                <NavLink
                  to={"/admin/user-management-page/"}
                  style={styles.buttonLink}
                >
                  <Button color="default">Back</Button>
                </NavLink>
                <Button
                  color="rose"
                  className={classes.updateProfileButton}
                  onClick={submit}
                >
                  Update
                </Button>
              </div>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  null,
  { activeUser }
)(UpdateUserInfo);
