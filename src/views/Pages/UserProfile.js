import React from "react";
import { connect } from "react-redux";

import { updateBasicInfo, updateAddressInfo } from "provider/actions";
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

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

// import avatar from "assets/img/avatar-1.jpg";

const useStyles = makeStyles(styles);

function UserProfile({ updateBasicInfo, updateAddressInfo }) {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          {/* <Card>
            <CardBody>
              <UserBasicInfo title="Basic Info" onUpdate={updateBasicInfo} />
            </CardBody>
          </Card> */}
          <Card>
            <CardBody>
              <AddressInfo
                title="Company Address Info"
                onUpdate={updateAddressInfo}
              />
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <AddressInfo
                title="Shipping Address Info"
                onUpdate={updateAddressInfo}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            {/* <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar> */}
            <CardBody profile>
              <h6 className={classes.cardCategory}>Retailer</h6>
              <h4 className={classes.cardTitle}>Toyto Company</h4>
              <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse at aliquet tortor. Ut tempus tellus nisl, ac mollis
                nunc luctus nec. Ut libero nunc, dignissim ut condimentum sed,
                scelerisque placerat orci. In hac habitasse platea dictumst.
                Quisque sollicitudin condimentum tincidunt.
              </p>
              <Button color="rose" round>
                Change Password
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default connect(
  null,
  { updateBasicInfo, updateAddressInfo }
)(UserProfile);
