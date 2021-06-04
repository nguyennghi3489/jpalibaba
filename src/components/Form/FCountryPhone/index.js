import { makeStyles } from "@material-ui/core/styles";
import { useField } from "formik";
import { verifyPhoneNumber } from "helpers";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "../FormStyle";

const useStyles = makeStyles(styles);

export const FCountryPhone = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  const classes = useStyles();
  return (
    <div className={classes.fieldContainer}>
      <label className={classes.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <PhoneInput
        onlyCountries={["vn", "jp"]}
        country={"vn"}
        isValid={(value, country) => verifyPhoneNumber(value)}
        {...field}
        {...props}
        onChange={(phone) => {
          setValue(phone);
        }}
      />
      <div className={classes.errorLabel}>
        {meta.touched && meta.error ? meta.error : null}
      </div>
    </div>
  );
};
