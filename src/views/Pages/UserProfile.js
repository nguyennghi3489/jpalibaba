import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { updateBasicInfo, updateAddressInfo } from "provider/actions";

import { getAgencyInfoApi } from "provider/apis";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import UserBasicInfo from "../Components/BasicInfo";
import AddressInfo from "../Components/AddressInfo";
import { getUserIdSelector } from "provider/selectors";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

// import avatar from "assets/img/avatar-1.jpg";

const useStyles = makeStyles(styles);

function UserProfile({ updateBasicInfo, updateAddressInfo, userId }) {
  const [agencyInfo, setAgencyInfo] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getAgencyInfoApi(userId);
      setAgencyInfo(data.user);
    }
    fetchData();
  }, []);
  const classes = useStyles();
  return (
    <div>
      {agencyInfo && (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <UserBasicInfo
                  data={agencyInfo.agency}
                  title="Agency Info"
                  onUpdate={updateBasicInfo}
                />
              </CardBody>
            </Card>
            {agencyInfo.shippingAddress.length > 0 && (
              <Card>
                <CardBody>
                  <AddressInfo
                    data={agencyInfo.shippingAddress[0]}
                    title="Shipping Address Info"
                    onUpdate={updateAddressInfo}
                  />
                </CardBody>
              </Card>
            )}
          </GridItem>
          {/* <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardBody profile>
                <h6 className={classes.cardCategory}>
                  {agencyInfo.user.role == 2 ? "Importer" : "Retailer"}
                </h6>
                <h4 className={classes.cardTitle}>{agencyInfo.agency.name}</h4>
                <p className={classes.description}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse at aliquet tortor. Ut tempus tellus nisl, ac
                  mollis nunc luctus nec. Ut libero nunc, dignissim ut
                  condimentum sed, scelerisque placerat orci. In hac habitasse
                  platea dictumst. Quisque sollicitudin condimentum tincidunt.
                </p>
                <Button color="rose" round>
                  Change Password
                </Button>
              </CardBody>
            </Card>
          </GridItem> */}
        </GridContainer>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userId: getUserIdSelector(state),
});

export default connect(
  mapStateToProps,
  { updateBasicInfo, updateAddressInfo }
)(UserProfile);
