// @material-ui/core components
import { getOrderByIdApi } from "provider/apis";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InvalidOrder } from "./components/InvalidOrder";
import { OrderDetailInfo } from "./components/OrderDetailInfo";

export default function OrderDetailPage() {
  const { id } = useParams();
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
