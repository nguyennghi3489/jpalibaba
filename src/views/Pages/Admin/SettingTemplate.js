import React, { useState } from "react";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { updateTemplateSetting } from "provider/actions";

// @material-ui/icons
import Attachment from "@material-ui/icons/Attachment";
import GetApp from "@material-ui/icons/GetApp";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import Box from "@material-ui/core/Box";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

// import avatar from "assets/img/avatar-1.jpg";

const useStyles = makeStyles(styles);

function UploadButton({ classes, onChange }) {
  const [file, setFile] = useState(null);

  const changeFile = (e) => {
    setFile(e.target.files[0]);
    onChange(e.target.files[0]);
  };

  return (
    <div className={classes.uploadWrapper}>
      <Button color="info" size="sm" round type="file">
        <Attachment className={classes.icon} />
      </Button>
      <input
        type="file"
        className={classes.uploadInput}
        onChange={changeFile}
      />
      {file && file.name}
    </div>
  );
}

function SettingTemplate({ updateTemplateSetting }) {
  const classes = useStyles();
  const [receiveOrderfile, setReceiveOrderfile] = useState(null);
  const [newAccountfile, setNewAccount] = useState(null);

  const updateSetting = () => {
    updateTemplateSetting({
      receiveOrderfile,
      newAccountfile,
    });
  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Box mt={4} className={classes.box}>
                    <UploadButton
                      classes={classes}
                      onChange={setReceiveOrderfile}
                    />
                    <a href="/images/myw3schoolsimage.jpg" download>
                      <Button
                        color="rose"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <GetApp className={classes.icon} />
                      </Button>
                    </a>
                    <span>
                      {"   "}
                      Mail Template for Notifying when received an order
                    </span>
                  </Box>
                  <Box mt={4} className={classes.box}>
                    <UploadButton classes={classes} onChange={setNewAccount} />
                    <a href="/images/myw3schoolsimage.jpg" download>
                      <Button
                        color="rose"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <GetApp className={classes.icon} />
                      </Button>
                    </a>
                    <span>
                      {"   "}
                      Mail Template for new account is created
                    </span>
                  </Box>
                </GridItem>
              </GridContainer>
              <Button
                color="rose"
                className={classes.updateProfileButton}
                onClick={updateSetting}
              >
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

export default connect(
  null,
  { updateTemplateSetting }
)(SettingTemplate);
