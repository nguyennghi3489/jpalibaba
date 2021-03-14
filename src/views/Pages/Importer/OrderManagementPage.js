// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { OrderStatusChip } from "components/OrderStatusChip";
import { orderSlice } from "provider/actions";
import { getOrderListSelector } from "provider/selectors";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { appUrl } from "routing";

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

function OrderManagementPage({ orders, getOrders }) {
  useEffect(() => {
    getOrders();
  }, []);
  const roundButtons = [{ color: "info" }].map((prop, key) => {
    return (
      <NavLink to="/admin/order-view/123">
        <Button color="rose" size="sm">
          View
        </Button>
      </NavLink>
    );
  });
  // const data = retailerDataTable.dataRows.map((prop, key) => {
  //   return {
  //     id: key,
  //     retailer: prop[0],
  //     campaign: (
  //       <NavLink to={`/admin${appUrl.campaignDetailPage}/abc`}>
  //         {prop[1]}
  //       </NavLink>
  //     ),
  //     quantity: prop[2],
  //     total: prop[3],
  //     status: <OrderStatusChip status={prop[4]} />,
  //     action: roundButtons
  //   };
  // });
  const data = orders.map((order, key) => {
    console.log(order);
    return {
      id: order.id,
      billNumber: (
        <NavLink to={`/admin/order-detail/${order.id}`}>{order.id}</NavLink>
      ),
      campaign: (
        <NavLink to={`/admin${appUrl.campaignDetailPage}/abc`}>
          {order.campaign.id}
        </NavLink>
      ),
      retailer: order.retailerId,
      quantity: order.quantity,
      total: 100,
      date: order.createdDate.toString(),
      status: <OrderStatusChip status={order.status} />,
      action: roundButtons
    };
  });

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader className={classes.helpBar}>
            <Button color="rose" size="sm">
              Export CSV
            </Button>
          </CardHeader>
          <CardBody>
            <ReactTable
              data={data.map(item => ({ ...item, roundButtons }))}
              filterable
              columns={[
                {
                  Header: "ID",
                  accessor: "id"
                },
                {
                  Header: "Retailer",
                  accessor: "retailer"
                },
                {
                  Header: "Campaign",
                  accessor: "campaign"
                },
                {
                  Header: "Quantity",
                  accessor: "quantity"
                },
                {
                  Header: "Total",
                  accessor: "total"
                },
                {
                  Header: "Status",
                  accessor: "status"
                },
                {
                  Header: "Action",
                  accessor: "action"
                }
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

const mapStateToProp = state => ({
  orders: getOrderListSelector(state)
});

const mapDispatchToProp = dispatch => ({
  getOrders: () => dispatch(orderSlice.actions.getImporterOrders())
});

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(OrderManagementPage);
