import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  grayColor,
  blackColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.js";
import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.js";

const pricingPageStyle = theme => ({
  ...customCheckboxRadioSwitch,
  ...customSelectStyle,
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(" + hexToRgb(blackColor) + ", 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex"
  },
  mrAuto: {
    marginRight: "auto"
  },
  mlAuto: {
    marginLeft: "auto"
  },
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  confirmSection: {
    display: "flex",
    justifyContent: "space-between"
  },
  card: {
    marginBottom: "60px"
  }
});

export default pricingPageStyle;
