// @material-ui/core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
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

const HistoryPurchasePage = ({ orders, getOrders }) => {
  useEffect(() => {
    getOrders();
  }, []);
  const roundButtons = [{ color: "info" }].map((prop, key) => {
    return (
      <>
        <NavLink to="/admin/order-detail/123">
          <Button color="rose">View</Button>
        </NavLink>
      </>
    );
  });

  const data = orders.map((order, key) => {
    return {
      id: order.id,
      billNumber: (
        <NavLink to={`/admin/order-detail/${order.id}`}>{order.id}</NavLink>
      ),
      importer: order.importerId,
      brand: order.campaign.product.brand,
      amount: order.quantity,
      price: formatCurrency(order.quantity * order.price),
      date: order.createdDate.toString(),
      status: <OrderStatusChip status={order.status} />,
      action: roundButtons
    };
  });

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardBody>
            <ReactTable
              data={data.map(item => ({ ...item, roundButtons }))}
              filterable
              columns={[
                {
                  Header: "Order Id",
                  accessor: "billNumber"
                },
                {
                  Header: "Importer",
                  accessor: "importer"
                },
                {
                  Header: "Brand",
                  accessor: "brand"
                },
                {
                  Header: "Amount",
                  accessor: "amount"
                },
                {
                  Header: "Total",
                  accessor: "price"
                },
                {
                  Header: "Date",
                  accessor: "date"
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
};

const mapStateToProp = state => ({
  orders: getOrderListSelector(state)
});

const mapDispatchToProp = dispatch => ({
  getOrders: () => dispatch(orderSlice.actions.getRetailerOrders())
});

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(HistoryPurchasePage);
