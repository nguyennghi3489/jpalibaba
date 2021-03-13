import { Button, Typography } from "@material-ui/core";
import { formatCurrency } from "helpers";
import React from "react";

interface Props {
  quantity: number;
  unitPrice: number;
  onCreateOder: () => void;
}
export const ConfirmationAndCreateOrder = ({
  quantity,
  unitPrice,
  onCreateOder,
}: Props) => {
  return (
    <>
      <div>
        <div>
          <h3>
            Total Price : <b>{formatCurrency(quantity * unitPrice)} </b>
          </h3>
          <Typography variant="body2" color="textSecondary" component="p">
            The order is not available for updating after 48 hours.
          </Typography>
        </div>
        <div>
          <Button color="primary" size="large" onClick={onCreateOder}>
            Complete Purchase
          </Button>
        </div>
      </div>
    </>
  );
};
