import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";

import { itemDataTable } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  helpBar: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between"
  }
};

const useStyles = makeStyles(styles);

export default function ItemManagementPage() {
  const roundButtons = [{ color: "info" }].map((prop, key) => {
    return (
      <>
        <Button color="rose" size="sm">
          Update
        </Button>
        <Button size="sm">Delete</Button>
      </>
    );
  });
  const [data, setData] = React.useState(
    itemDataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        productName: prop[0],
        category: prop[1],
        maker: prop[2],
        price: prop[3],
        minImportLot: prop[4],
        expiry: prop[5],
        action: roundButtons
      };
    })
  );
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Item Management</h4>
          </CardHeader>
          <CardHeader className={classes.helpBar}>
            <div>
              <Button color="rose" size="sm">
                Export CSV
              </Button>
              <Button color="rose" size="sm">
                Import CSV
              </Button>
            </div>
            <Button color="rose" size="sm">
              Create New Item
            </Button>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={data.map(item => ({ ...item, roundButtons }))}
              filterable
              columns={[
                {
                  Header: "Name",
                  accessor: "productName"
                },
                {
                  Header: "Category",
                  accessor: "category"
                },
                {
                  Header: "Maker",
                  accessor: "maker"
                },
                {
                  Header: "Price",
                  accessor: "price"
                },
                {
                  Header: "Minimum Import Lot",
                  accessor: "minImportLot"
                },
                {
                  Header: "Expired Date Range",
                  accessor: "expiry"
                },

                {
                  Header: "Action",
                  accessor: "action"
                }
              ]}
              defaultPageSize={10}
              //   showPaginationTop
              //   showPaginationBottom={false}
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
