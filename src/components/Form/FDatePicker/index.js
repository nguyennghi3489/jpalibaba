import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { useField } from "formik";
import React from "react";
import Datetime from "react-datetime";
import styles from "../FormStyle";

const useStyles = makeStyles(styles);

export const FDatePicker = ({ label, isValidDate, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [meta, helpers] = useField(props);
  const { setValue } = helpers;
  const classes = useStyles();
  return (
    <div className={classes.fieldContainer}>
      <label className={classes.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <Datetime
        isValidDate={isValidDate}
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
