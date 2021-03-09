import React, { useState } from "react";
import { useField } from "formik";
import Select from "react-select";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
// import "../Form.css";
import { ChevronDown } from "components/Icon/ChevronDown";
import { Close } from "@material-ui/icons";
import { Dropdown } from "components/DropDown";

const useStyles = makeStyles(styles);

export const AutoCompleteSelect = ({
  label,
  value,
  onChange,
  options,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onSelectChange = (option) => {
    setIsOpen(!isOpen);
    onChange(option.value);
  };

  const selectedOption = options.filter((item) => item.value === value)[0];

  return (
    <div className={classes.fieldContainer}>
      <label className={classes.labelAndClear} htmlFor={props.id || props.name}>
        <span>{label}</span>
      </label>

      <Dropdown
        isOpen={isOpen}
        onClose={toggleDropdown}
        target={
          <div className={classes.selectField} onClick={toggleDropdown}>
            <span>{selectedOption && selectedOption.label}</span>
            <div>
              <ChevronDown></ChevronDown>
            </div>
          </div>
        }
      >
        <Select
          menuIsOpen
          className={{ background: "red", height: "60px" }}
          options={options}
          onChange={onSelectChange}
          placeholder={selectedOption && selectedOption.label}
          value={selectedOption && selectedOption.value}
        />
      </Dropdown>
    </div>
  );
};
