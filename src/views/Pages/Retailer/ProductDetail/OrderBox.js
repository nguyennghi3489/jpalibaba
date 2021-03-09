// import Button from "components/CustomButtons/Button.js";
import { makeStyles, TextField } from "@material-ui/core";
import Button from "components/CustomButtons/Button.js";
import React, { useState } from "react";
import styles from "./ProductDetailPageStyle.js";

const useStyles = makeStyles(styles);

export const OrderBox = ({ onActionDone, validOrderNumber }) => {
  const classes = useStyles();
  const [invalid, setInvalid] = useState(false);
  const [quantity, setQuantity] = useState(validOrderNumber);

  const handleUpdateQuantity = (input) => {
    setQuantity(parseInt(input.target.value, 10));
  };
  const processCampaign = () => {
    if (quantity < validOrderNumber || isNaN(quantity)) {
      setInvalid(true);
      return;
    }
    setInvalid(false);
    onActionDone(quantity);
  };

  return (
    <div>
      <div>
        <TextField
          className={classes.orderNumber}
          id="outlined-error"
          label="Number Unit Order"
          defaultValue="10000"
          variant="outlined"
          type="number"
          value={quantity}
          onChange={handleUpdateQuantity}
        />
      </div>
      <div className={classes.errorLabel}>
        {invalid &&
          "Your input quantity is lower than our minimum amount we can process"}
      </div>

      <Button
        color="rose"
        size="lg"
        className={classes.marginRight}
        onClick={processCampaign}
      >
        Place An Order
      </Button>
    </div>
  );
};
