import React, { useCallback, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import CardText from "components/Card/CardText.js";
import Typography from "@material-ui/core/Typography";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

import { connect } from "react-redux";
import { getOrderProcessInfoSelector } from "provider/selectors";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { formatCurrency } from "helpers";
import { Chip } from "@material-ui/core";
import { useLocalStorage } from "hooks/useLocalStorage";
import { appUrl } from "routing";
import { TextBoxWithLabel } from "components/TextBoxWithLabel";
import { AutoCompleteSelect } from "components/AutoCompleteSelect";
import { orderStatusOptions } from "constant";
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
