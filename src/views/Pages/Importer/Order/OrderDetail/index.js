import React, { useCallback, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

import { connect } from "react-redux";
import { getOrderProcessInfoSelector } from "provider/selectors";
import { useHistory, useParams } from "react-router-dom";
import { useLocalStorage } from "hooks/useLocalStorage";
import { getOrderByIdApi } from "provider/apis";
import { OrderDetailInfo } from "../components/OrderDetailInfo";
import { InvalidOrder } from "../components/InvalidOrder";

const useStyles = makeStyles(styles);

function ImporterOrderDetailPage({ order }) {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const [localQuantity, setLocalQuantity] = useState(0);
  const [cart, setCart] = useLocalStorage("cart", null);
  const [orderStatus, setOrderStatus] = useState(1);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      const data = await getOrderByIdApi(id);
      setData(data.order);
    };
    fetchOrderDetail();
  }, [id]);

  return <>{data ? <OrderDetailInfo data={data} /> : <InvalidOrder />}</>;
}

const mapStateToProps = (state) => ({
  order: getOrderProcessInfoSelector(state),
});

export default connect(
  mapStateToProps,
  {}
)(ImporterOrderDetailPage);
