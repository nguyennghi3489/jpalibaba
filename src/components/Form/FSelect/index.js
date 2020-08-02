import React from "react";
import { useField } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../FormStyle";
import "../Form.css";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export const FSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  return (
    <div className={classes.fieldContainer}>
      <label className={classes.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <select
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
