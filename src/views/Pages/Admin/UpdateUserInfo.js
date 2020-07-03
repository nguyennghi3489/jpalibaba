import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { activeUser, getAgencyInfo } from "provider/actions";
import { appUrl } from "routing";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { getAgencyInfoApi } from "provider/apis";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

const useStyles = makeStyles(styles);

function UpdateUserInfo(props) {
  const classes = useStyles();
  const [agencyInfo, setAgencyInfo] = useState(null);

  useEffect(() => {
    const {
      match: {
        params: { id },
      },
    } = props;

    async function fetchData() {
      // You can await here
      const data = await getAgencyInfoApi(id);
      setAgencyInfo(data.user);
      // ...
    }
    fetchData();
  }, []);

  const submit = () => {
    props.activeUser({ userId: props.match.params.id, activateId: true });
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          {agencyInfo && (
            <Card profile>
              <CardBody profile>
                <h6 className={classes.cardCategory}>Retailer</h6>
                <h4 className={classes.cardTitle}>{agencyInfo.agency.name}</h4>
                <br />
                <p className={classes.cardTitle}>
                  Enterprise Number: ${agencyInfo.agency.enterpriseNumber}
                </p>
                <p className={classes.cardTitle}>
                  Person In Charge: ${agencyInfo.user.fullName}
                </p>
                <p className={classes.cardTitle}>${agencyInfo.agency.email}</p>
              </CardBody>
            </Card>
          )}
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardBody>
              <div className={classes.actionSection}>
                <NavLink to={appUrl.adminDefaultPage} style={styles.buttonLink}>
                  <Button color="default">Back</Button>
                </NavLink>
                <Button
                  color="rose"
                  className={classes.updateProfileButton}
                  onClick={submit}
                >
                  Activate
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
