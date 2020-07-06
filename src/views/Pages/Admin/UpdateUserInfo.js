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
import { getAgencyInfoByAdminApi } from "provider/apis";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

const useStyles = makeStyles(styles);

const renderRole = (role) => {
  return role === 2 ? "Importer" : "Retailer";
};

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
      const data = await getAgencyInfoByAdminApi(id);
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
            <>
              <Card profile>
                <CardBody profile>
                  <h3>Agency Info</h3>
                  <h6 className={classes.cardCategory}>
                    {renderRole(agencyInfo.user.role)}
                  </h6>
                  <h4 className={classes.cardTitle}>
                    {agencyInfo.agency.name}
                  </h4>
                  <br />

                  <p className={classes.cardTitle}>
                    Representative Name:{" "}
                    <b>{agencyInfo.agency.representativeName}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    Enterprise Number:{" "}
                    <b>{agencyInfo.agency.enterpriseNumber}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    Person In Charge: <b>{agencyInfo.user.fullName}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    Email: <b>{agencyInfo.agency.email}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    Phone: <b>{agencyInfo.agency.phone}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    Address: <b>{agencyInfo.agency.address}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    Country: <b>{agencyInfo.agency.country}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    City: <b>{agencyInfo.agency.city}</b>
                  </p>
                  <p className={classes.cardTitle}>
                    Zip Code: <b>{agencyInfo.agency.zipCode}</b>
                  </p>
                </CardBody>
              </Card>
              {agencyInfo.shippingAddress.length > 0 && (
                <Card profile>
                  <CardBody profile>
                    <h3>Shipping Address Info</h3>
                    <p className={classes.cardTitle}>
                      First Name:{" "}
                      <b>{agencyInfo.shippingAddress[0].firstName}</b>
                    </p>
                    <p className={classes.cardTitle}>
                      Last Name: <b>{agencyInfo.shippingAddress[0].lastName}</b>
                    </p>
                    <p className={classes.cardTitle}>
                      Phone: <b>{agencyInfo.shippingAddress[0].phone}</b>
                    </p>
                    <p className={classes.cardTitle}>
                      Street 1: <b>{agencyInfo.shippingAddress[0].street1}</b>
                    </p>
                    <p className={classes.cardTitle}>
                      Street 2: <b>{agencyInfo.shippingAddress[0].street2}</b>
                    </p>
                    <p className={classes.cardTitle}>
                      Country: <b>{agencyInfo.shippingAddress[0].country}</b>
                    </p>
                    <p className={classes.cardTitle}>
                      City: <b>{agencyInfo.shippingAddress[0].city}</b>
                    </p>
                    <p className={classes.cardTitle}>
                      Zip Code: <b>{agencyInfo.shippingAddress[0].zipCode}</b>
                    </p>
                  </CardBody>
                </Card>
              )}
              <Card>
                <CardBody>
                  <div className={classes.actionSection}>
                    <NavLink
                      to={appUrl.adminDefaultPage}
                      style={styles.buttonLink}
                    >
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
            </>
          )}
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  null,
  { activeUser }
)(UpdateUserInfo);
