import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import Attachment from "@material-ui/icons/Attachment";
import GetApp from "@material-ui/icons/GetApp";
import Publish from "@material-ui/icons/Publish";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardAvatar from "components/Card/CardAvatar.js";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

// import avatar from "assets/img/avatar-1.jpg";

const useStyles = makeStyles(styles);

export default function SettingTemplate() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            {/* <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Attachment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Email Template - Setting
              </h4>
            </CardHeader> */}
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Box mt={4} className={classes.box}>
                    <Button
                      color="info"
                      size="sm"
                      round
                      className={classes.lastButton}
                    >
                      <Attachment className={classes.icon} />
                    </Button>
                    <Button
                      color="rose"
                      size="sm"
                      round
                      className={classes.lastButton}
                    >
                      <GetApp className={classes.icon} />
                    </Button>
                    <span>
                      {"   "}
                      Mail Template for Notifying when received an order
                    </span>
                  </Box>
                  <Box mt={4} className={classes.box}>
                    <Button
                      color="info"
                      size="sm"
                      round
                      className={classes.lastButton}
                    >
                      <Attachment className={classes.icon} />
                    </Button>
                    <Button
                      color="rose"
                      size="sm"
                      round
                      className={classes.lastButton}
                    >
                      <GetApp className={classes.icon} />
                    </Button>
                    <span>
                      {"   "}
                      Mail Template for new account is created
                    </span>
                  </Box>
                </GridItem>
              </GridContainer>
              <Button color="rose" className={classes.updateProfileButton}>
                Update
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
