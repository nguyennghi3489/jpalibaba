// @material-ui/core components
import { Chip } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import { NavLink } from "react-router-dom";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { historyDataTable } from "variables/general.js";

export const OrderStatusChip = ({ status }) => {
  switch (status) {
    case 0:
      return <Chip label="Proccess To Import" color="basic" />;
    case 1:
      return <Chip label="Shipped" color="primary" variant="outlined" />;
    case 2:
      return <Chip label="Delivered" color="primary" />;
    case 3:
      return <Chip label="Unable To Import" color="secondary" />;
    default:
      return <Chip label="Proccess To Import" color="basic" />;
  }
};

export default function HistoryPurchasePage() {
  const roundButtons = [{ color: "info" }].map((prop, key) => {
    return (
      <>
        <NavLink to="/admin/order-detail/123">
          <Button color="rose">View</Button>
        </NavLink>
      </>
    );
  });

  const data = historyDataTable.dataRows.map((prop, key) => {
    return {
      id: key,
      billNumber: <NavLink to="/admin/order-detail/123">{prop[0]}</NavLink>,
      importer: prop[1],
      brand: prop[2],
      amount: prop[3],
      price: prop[4],
      date: prop[5],
      status: <OrderStatusChip status={prop[6]} />,
      action: roundButtons,
    };
  });

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          {/* <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Order History</h4>
          </CardHeader> */}
          <CardBody>
            <ReactTable
              data={data.map((item) => ({ ...item, roundButtons }))}
              filterable
              columns={[
                {
                  Header: "Order Id",
                  accessor: "billNumber",
                },
                {
                  Header: "Importer",
                  accessor: "importer",
                },
                {
                  Header: "Brand",
                  accessor: "brand",
                },
                {
                  Header: "Amount",
                  accessor: "amount",
                },
                {
                  Header: "Total",
                  accessor: "price",
                },
                {
                  Header: "Date",
                  accessor: "date",
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
