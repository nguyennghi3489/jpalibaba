import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { useField } from "formik";
import React from "react";
import Datetime from "react-datetime";
import styles from "../FormStyle";

const useStyles = makeStyles(styles);

export const FDatePicker = ({
  label,
  isValidDate,
  defaultValue,
  disabled,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  const classes = useStyles();
  return (
    <div className={classes.fieldContainer}>
      <label
        className={classNames(classes.label, {
          [classes.disabled]: disabled,
        })}
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <Datetime
        isValidDate={isValidDate}
        className={classNames(classes.datePickerField, {
          [classes.error]: meta.touched && meta.error,
        })}
        inputProps={{
          disabled,
        }}
        {...props}
        value={field.value}
        onChange={(value) => setValue(value)}
      />
      <div className={classes.errorLabel}>
        {meta.touched && meta.error ? meta.error : null}
      </div>
    </div>
  );
};
