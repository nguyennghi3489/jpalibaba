// @material-ui/core components
import { IconButton, Tooltip } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
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
import { formatCurrency } from "helpers";
import { orderSlice } from "provider/actions";
import { getOrderListSelector } from "provider/selectors";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { appUrl } from "routing";
import { ActionButtons } from "./components/ActionButtons";

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

function OrderManagementPage({ orders, getOrders }) {
  useEffect(() => {
    getOrders();
  }, []);
  const roundButtons = [{ color: "info" }].map((prop, key) => {
    return (
      <NavLink to="/admin/order-view/123">
        <Tooltip title="View Order Detail">
          <IconButton color="rose" size="sm">
            <OpenInNewIcon />
          </IconButton>
        </Tooltip>
      </NavLink>
    );
  });
  const data = orders.map((order, key) => {
    return {
      id: order.id,
      campaign: (
        <NavLink to={`/admin${appUrl.campaignDetailPage}/${order.campaign.id}`}>
          {`${order.campaign.product.title} (Goal: ${order.campaign.goal})`}
        </NavLink>
      ),
      retailer: order.agencyName,
      quantity: order.quantity,
      total: formatCurrency(order.quantity * order.price),
      date: order.createdDate.toString(),
      status: <OrderStatusChip status={order.status} />,
      action: <ActionButtons id={order.id} />,
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
                  Header: "Campaign",
                  accessor: "campaign",
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

const mapStateToProp = (state) => ({
  orders: getOrderListSelector(state),
});

const mapDispatchToProp = (dispatch) => ({
  getOrders: () => dispatch(orderSlice.actions.getImporterOrders()),
});

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(OrderManagementPage);
