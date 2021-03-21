// @material-ui/core components
import { orderSlice } from "provider/actions";
import { getOrderByIdApi } from "provider/apis";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Dispatch } from "redux";
import { InvalidOrder } from "./components/InvalidOrder";
import { OrderDetailInfo } from "./components/OrderDetailInfo";

interface Props {
  updateOrder: (orderId: string, status: number) => void;
}
function OrderDetailPage({ updateOrder }: Props) {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      const data = await getOrderByIdApi(id);
      setData(data.order);
    };
    fetchOrderDetail();
  }, [id]);

  return (
    <>
      {data ? (
        <OrderDetailInfo data={data} updateOrder={updateOrder} />
      ) : (
        <InvalidOrder />
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateOrder: (orderId: string, status: number) => {
    dispatch(orderSlice.actions.updateOrder({ orderId, status }));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(OrderDetailPage);
