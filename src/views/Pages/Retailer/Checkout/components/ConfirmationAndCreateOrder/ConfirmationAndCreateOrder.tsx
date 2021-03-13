import { Button, Typography } from "@material-ui/core";
import { formatCurrency } from "helpers";
import React from "react";
import styles from "./styles.module.css";

interface Props {
  quantity: number;
  unitPrice: number;
  onSubmit: () => void;
  emptyAddressError: boolean;
}
export const ConfirmationAndCreateOrder = ({
  quantity,
  unitPrice,
  onSubmit,
  emptyAddressError
}: Props) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <Typography variant="h5" color="textPrimary" component="h3">
            Total Price : <b>{formatCurrency(quantity * unitPrice)} </b>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The order is not available for updating after 48 hours.
          </Typography>
        </div>
        <div className={styles.actions}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onSubmit}>
            Complete Purchase
          </Button>
          {emptyAddressError && (
            <Typography color="error">
              Please pick an address to next process{" "}
            </Typography>
          )}
        </div>
      </div>
    </>
  );
};
