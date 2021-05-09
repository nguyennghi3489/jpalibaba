import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import { connect } from "react-redux";
import { mailSettingSlice } from "provider/actions";
import { getAgencyIdSelector } from "provider/selectors";
import { getMailSettingApi } from "provider/apis/mailSetting";
import { EmailSettingKey } from "provider/models/mail-setting";

// import avatar from "assets/img/avatar-1.jpg";

const useStyles = makeStyles(styles);

function ImporterSettingPage({ updateSetting, agencyId }) {
  const [setting, setSetting] = useState({});
  useEffect(() => {
    const fetch = async () => {
      const data = await getMailSettingApi(agencyId);
      setSetting(data.setting);
    };
    fetch();
  }, [agencyId]);

  const getSettingForKey = (key) => {
    return setting[key] ?? false;
  };
  const toggleSettingKey = (key) => {
    const keyValue = setting[key] ?? false;
    const newSetting = { ...setting, [key]: !keyValue };
    setSetting(newSetting);
  };

  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader className={classes.helpBar}>
              <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Choose frequency options for receiving mail
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select",
                      }}
                      value={1}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem,
                        }}
                        value="1"
                      >
                        Every Interaction
                      </MenuItem>
                      {/* <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        EveryDay
                      </MenuItem> */}
                    </Select>
                  </FormControl>
                </GridItem>
              </GridContainer>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Box>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={getSettingForKey(
                            EmailSettingKey.MIN_IMPORT_LOT_NOTIFY
                          )}
                          onChange={() =>
                            toggleSettingKey(
                              EmailSettingKey.MIN_IMPORT_LOT_NOTIFY
                            )
                          }
                          value={EmailSettingKey.MIN_IMPORT_LOT_NOTIFY}
                          classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            thumb: classes.switchIcon,
                            track: classes.switchBar,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                      }}
                      label="Notify me when order reached minimum import lot "
                    />
                  </Box>
                  <Box mt={2}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={getSettingForKey(
                            EmailSettingKey.NEW_ORDER_NOTIFY
                          )}
                          onChange={() =>
                            toggleSettingKey(EmailSettingKey.NEW_ORDER_NOTIFY)
                          }
                          value={EmailSettingKey.NEW_ORDER_NOTIFY}
                          classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            thumb: classes.switchIcon,
                            track: classes.switchBar,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                      }}
                      label="Notify me when received an order"
                    />
                  </Box>
                  {/* <Box mt={2}>
                    <FormControlLabel
                      control={
                        <Switch
                          value="checkedA"
                          classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            thumb: classes.switchIcon,
                            track: classes.switchBar,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                      }}
                      label="Notify me when customer changed order information"
                    />
                  </Box> */}
                  <Box mt={2}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={getSettingForKey(
                            EmailSettingKey.CANCELLED_ORDER_NOTIFY
                          )}
                          onChange={() =>
                            toggleSettingKey(
                              EmailSettingKey.CANCELLED_ORDER_NOTIFY
                            )
                          }
                          value={EmailSettingKey.CANCELLED_ORDER_NOTIFY}
                          classes={{
                            switchBase: classes.switchBase,
                            checked: classes.switchChecked,
                            thumb: classes.switchIcon,
                            track: classes.switchBar,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                      }}
                      label="Notify me when customer canceled an order"
                    />
                  </Box>
                </GridItem>
              </GridContainer>
              <Button
                color="rose"
                className={classes.updateProfileButton}
                onClick={() => updateSetting(setting)}
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

const mapStateToProps = (state) => ({
  agencyId: getAgencyIdSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  updateSetting: (setting) =>
    dispatch(mailSettingSlice.actions.update(setting)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImporterSettingPage);
