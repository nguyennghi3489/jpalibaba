import React from "react";
import { useField } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../FormStyle";
import classNames from "classnames";
import { DEFAULT_MAX_LENGTH } from "constant";

const useStyles = makeStyles(styles);

export const FInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  const classes = useStyles();
  return (
    <div className={classes.fieldContainer}>
      <label className={classes.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        maxLength={DEFAULT_MAX_LENGTH}
        className={classNames(classes.field, {
          [classes.error]: meta.touched && meta.error,
        })}
        {...field}
        {...props}
      />
      <div className={classes.errorLabel}>
        {meta.touched && meta.error ? meta.error : null}
      </div>
    </div>
  );
};
