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

const productDetailPageStyle = theme => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px"
    }
  },
  productName: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: padding.Normal
  },
  brandInfo: {
    textAlign: "center",
    "& li": {
      listStyleType: "none",
      display: "inline-block",
      marginLeft: padding.Normal,
      marginRight: padding.Normal
    }
  },
  mainImage: {
    maxWidth: "100%",
    width: "100%"
  },
  brandItem: {
    fontSize: fontSize.Normal,
    display: "flex",
    alignItems: "center"
  },
  detailInfo: {
    marginTop: padding.Giant
  },
  labelText: {
    fontSize: fontSize.Normal,
    display: "flex",
    alignItems: "center"
  },
  orderInfo: {
    marginBottom: padding.XXXLarge,
    "& h3": {
      marginTop: padding.Normal
    },
    "& p": {
      marginBottom: padding.Normal
    }
  },
  valueText: {
    fontWeight: "bold",
    fontSize: fontSize.Giant
  }
});

export default productDetailPageStyle;
