import {
  cardTitle,
  grayColor,
  whiteColor,
  primaryColor,
} from "assets/jss/material-dashboard-pro-react.js";
import { NONAME } from "dns";

const formStyles = {
  label: {
    fontWeight: "bold",
    display: "block",
    fontSize: "10px",
    color: "#444",
  },
  field: {
    width: "100%",
    display: "block",
    border: 0,
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    height: "25px",
  },
  datePickerField: {
    width: "100%",
    display: "block",
    border: 0,
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    height: "36px",
    "& input": {
      background: "none !important",
    },
  },
  selectField: {
    width: "100%",
    display: "block",
    border: 0,
    borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
    height: "25px",
    display: "flex",
    justifyContent: "space-between",
  },
  fieldContainer: {
    display: "block",
    marginBottom: "20px",
  },
  error: {
    borderBottom: "1px solid red",
  },
  errorLabel: {
    color: "red",
    fontSize: "10px",
    height: "10px",
  },
};
export default formStyles;
