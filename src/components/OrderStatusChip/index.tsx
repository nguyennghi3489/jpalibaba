import { Chip } from "@material-ui/core";
import React from "react";

interface Props {
  status: number;
}
export const OrderStatusChip = ({ status }: Props) => {
  switch (status) {
    case 0:
      return <Chip label="New" color="primary" />;
    case 1:
      return (
        <Chip label="Proceed To Import" color="primary" variant="outlined" />
      );
    case 2:
      return <Chip label="Shipped" color="primary" variant="outlined" />;
    case 3:
      return <Chip label="Delivered" color="primary" variant="outlined" />;
    case 4:
      return <Chip label="Unable To Import" color="secondary" />;
    case 5:
      return <Chip label="Canceled" color="secondary" />;
    default:
      return <Chip label="Proccess To Import" color="default" />;
  }
};
