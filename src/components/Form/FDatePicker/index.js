import React from "react";
import { useField, useFormik } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../FormStyle";
import classNames from "classnames";
import { DEFAULT_MAX_LENGTH } from "constant";
import PhoneInput from "react-phone-input-2";
import Datetime from "react-datetime";
import { VIETNAM_PHONE } from "helpers";

const useStyles = makeStyles(styles);

export const FDatePicker = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  const classes = useStyles();
  const { onChange } = field;
  console.log(field);
  return (
    <div className={classes.fieldContainer}>
      <label className={classes.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <Datetime
        className={classNames(classes.datePickerField, {
          [classes.error]: meta.touched && meta.error,
        })}
        timeFormat={false}
        onChange={(value) => setValue(value)}
      />
      <div className={classes.errorLabel}>
        {meta.touched && meta.error ? meta.error : null}
      </div>
    </div>
  );
};
