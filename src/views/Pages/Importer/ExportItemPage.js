import React, { useState } from "react";
import { connect } from "react-redux";
import { exportAdminItem } from "provider/actions";
import { ProductExportQuery } from "provider/models";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Datetime from "react-datetime";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

const useStyles = makeStyles(styles);

function ExportItemPage({ exportAdminItem }) {
  const classes = useStyles();
  const [makerId, setMakerId] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [zoneId, setZoneId] = useState(null);
  const [fromPrice, setFromPrice] = useState(null);
  const [toPrice, setToPrice] = useState(null);
  const [fromImportLot, setFromImportLot] = useState(null);
  const [toImportLot, setToImportLot] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const exportData = () => {
    const productExportQuery = new ProductExportQuery(
      null,
      makerId,
      categoryId,
      zoneId,
      fromPrice,
      toPrice,
      fromImportLot,
      toImportLot,
      startDate,
      endDate
    );
    exportAdminItem(productExportQuery);
  };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={6}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Choose Maker
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      value={makerId}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select",
                        onChange: (e) => setMakerId(e.target.value),
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem,
                        }}
                      >
                        Country
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        France
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="3"
                      >
                        Romania
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Choose Category
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      value={categoryId}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select",
                        onChange: (e) => setCategoryId(e.target.value),
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem,
                        }}
                      >
                        Country
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        France
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="3"
                      >
                        Romania
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                      htmlFor="simple-select"
                      className={classes.selectLabel}
                    >
                      Choose Temperature zone
                    </InputLabel>
                    <Select
                      MenuProps={{
                        className: classes.selectMenu,
                      }}
                      classes={{
                        select: classes.select,
                      }}
                      value={zoneId}
                      inputProps={{
                        name: "simpleSelect",
                        id: "simple-select",
                        onChange: (e) => setZoneId(e.target.value),
                      }}
                    >
                      <MenuItem
                        disabled
                        classes={{
                          root: classes.selectMenuItem,
                        }}
                      >
                        Normal
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="2"
                      >
                        France
                      </MenuItem>
                      <MenuItem
                        classes={{
                          root: classes.selectMenuItem,
                          selected: classes.selectMenuItemSelected,
                        }}
                        value="3"
                      >
                        Romania
                      </MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <CustomInput
                    labelText="From Price "
                    id="fromPrice"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={fromPrice}
                    inputProps={{
                      type: "number",
                      onChange: (e) => setFromPrice(e.target.value),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <CustomInput
                    labelText="To Price "
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={toPrice}
                    inputProps={{
                      type: "number",
                      onChange: (e) => setToPrice(e.target.value),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <CustomInput
                    labelText="From Import Lot "
                    id="streetname"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={fromImportLot}
                    inputProps={{
                      type: "number",
                      onChange: (e) => setFromImportLot(e.target.value),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <CustomInput
                    labelText="To Import Lot "
                    id="country"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    value={toImportLot}
                    inputProps={{
                      type: "number",
                      onChange: (e) => setToImportLot(e.target.value),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <FormControl fullWidth className={classes.datetime}>
                    <Datetime
                      inputProps={{ placeholder: "Start Date" }}
                      value={startDate}
                      onChange={(value) => setStartDate(value)}
                    />
                  </FormControl>
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <FormControl fullWidth className={classes.datetime}>
                    <Datetime
                      inputProps={{
                        placeholder: "End Date",
                      }}
                      value={endDate}
                      onChange={(value) => setEndDate(value)}
                    />
                  </FormControl>
                </GridItem>
              </GridContainer>
              <Button
                color="rose"
                onClick={exportData}
                className={classes.createButton}
              >
                Export
              </Button>
              <Clearfix />
            </CardBody>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Product Image</h4>
            </CardHeader>
            <CardBody>
              <PictureUpload image={productPlaceHolder} />
            </CardBody>
          </Card>
        </GridItem> */}
      </GridContainer>
    </div>
  );
}

export default connect(
  null,
  { exportAdminItem }
)(ExportItemPage);
