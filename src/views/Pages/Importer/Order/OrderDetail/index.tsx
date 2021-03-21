import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getOrderProcessInfoSelector } from "provider/selectors";
import { useParams } from "react-router-dom";
import { getOrderByIdApi } from "provider/apis";
import { OrderDetailInfo } from "../components/OrderDetailInfo";
import { InvalidOrder } from "../components/InvalidOrder";
import { AppState } from "provider/reducer";
import { Dispatch } from "redux";
import { orderSlice } from "provider/actions";

interface Props {
  updateOrder: (orderId: string, status: number) => void;
}
function ImporterOrderDetailPage({ updateOrder }: Props) {
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

const mapStateToProps = (state: AppState) => ({
  order: getOrderProcessInfoSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateOrder: (orderId: string, status: number) => {
    dispatch(orderSlice.actions.updateOrder({ orderId, status }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImporterOrderDetailPage);
