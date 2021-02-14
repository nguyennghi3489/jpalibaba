import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Chip from "@material-ui/core/Chip";

import { retailerDataTable } from "variables/general.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import { OrderStatusChip } from "components/OrderStatusChip";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
  helpBar: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
};

const useStyles = makeStyles(styles);

export default function OrderManagementPage() {
  const roundButtons = [{ color: "info" }].map((prop, key) => {
    return (
      <>
        <Button color="rose" size="sm">
          View
        </Button>
      </>
    );
  });
  const data = retailerDataTable.dataRows.map((prop, key) => {
    return {
      id: key,
      retailer: prop[0],
      product: prop[1],
      quantity: prop[2],
      total: prop[3],
      status: <OrderStatusChip status={prop[4]} />,
      action: roundButtons,
    };
  });

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          {/* <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Order Management</h4>
          </CardHeader> */}
          <CardHeader className={classes.helpBar}>
            <Button color="rose" size="sm">
              Export CSV
            </Button>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={data.map((item) => ({ ...item, roundButtons }))}
              filterable
              columns={[
                {
                  Header: "ID",
                  accessor: "id",
                },
                {
                  Header: "Retailer",
                  accessor: "retailer",
                },
                {
                  Header: "Product",
                  accessor: "product",
                },
                {
                  Header: "Quantity",
                  accessor: "quantity",
                },
                {
                  Header: "Total",
                  accessor: "total",
                },
                {
                  Header: "Status",
                  accessor: "status",
                },
                {
                  Header: "Action",
                  accessor: "action",
                },
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
