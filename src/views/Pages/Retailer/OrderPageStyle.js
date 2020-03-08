import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";

import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.js";
import { blackColor } from "assets/jss/material-dashboard-pro-react";
import { padding, borderRadius, fontSize } from "assets/jss/style-core";

const style = theme => ({
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  ...hoverCardStyle,
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  orderNumber: {
    marginTop: padding.XXXLarge,
    marginBottom: padding.XXXLarge
  },
  card: {
    marginBottom: padding.XXXGiant
  },
  totalPrice: {
    textAlign: "right"
  }
});

export default style;
