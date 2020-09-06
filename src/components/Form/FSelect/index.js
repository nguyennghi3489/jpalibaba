import React, { useState } from "react";
import { useField } from "formik";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../FormStyle";
import "../Form.css";
import { ChevronDown } from "components/Icon/ChevronDown";
import { Dropdown } from "./DropDown";

const useStyles = makeStyles(styles);

export const FSelect = ({ label, defaultValue, options, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { value } = field;
  const { setValue } = helpers;
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelectChange = (option) => {
    setIsOpen(!isOpen);
    setValue(option.value);
  };

  const pickedValue = value || defaultValue;
  const selectedOption = options.filter(
    (item) => item.value === pickedValue
  )[0];

  return (
    <div className={classes.fieldContainer}>
      <label className={classes.label} htmlFor={props.id || props.name}>
        {label}
      </label>

      <Dropdown
        isOpen={isOpen}
        onClose={toggleDropdown}
        target={
          <p className={classes.selectField} onClick={toggleDropdown}>
            <span>{selectedOption && selectedOption.label}</span>
            <ChevronDown></ChevronDown>
          </p>
        }
      >
        <Select
          menuIsOpen
          className={{ background: "red", height: "60px" }}
          options={options}
          onChange={onSelectChange}
          placeholder={selectedOption.label}
          value={selectedOption && selectedOption.value}
        />
      </Dropdown>

      <div className={classes.errorLabel}>
        {meta.touched && meta.error ? meta.error : null}
      </div>
    </div>
  );
};
