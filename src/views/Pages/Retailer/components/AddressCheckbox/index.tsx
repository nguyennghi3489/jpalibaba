import { Checkbox, FormControlLabel } from "@material-ui/core";
import React, { ChangeEvent } from "react";
import { Address } from "provider/models";

const createAddressText = (address: Address) => {
  const addressText = `${address.firstName} ${address.lastName} - ${address.phone} - ${address.street1} ${address.street2}, ${address.city}, ${address.country}`;
  return addressText.toUpperCase();
};

interface Props {
  checked: boolean;
  onChange: (id: string) => void;
  name: string;
  address: Address;
}
export const AddressCheckbox = ({
  checked,
  onChange,
  name,
  address,
}: Props) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleOnChange}
          value={address.id}
          name={name}
        />
      }
      label={createAddressText(address)}
    />
  );
};
