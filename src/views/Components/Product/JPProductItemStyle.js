import {
  container,
  defaultFont,
  cardTitle,
  roseColor,
  whiteColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.js";
import { padding, borderRadius, fontSize } from "assets/jss/style-core";
import { yellow } from "@material-ui/core/colors";
import { blackColor } from "assets/jss/material-dashboard-pro-react";

const JPProductItemStyle = theme => ({
  container: {
    fontSize: "16px",
    backgroundColor: "white",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: borderRadius.Normal,
    marginBottom: "30px"
  },
  image: {
    maxWidth: "100%",
    borderTopLeftRadius: borderRadius.Normal,
    borderTopRightRadius: borderRadius.Normal
  },
  featureSmallProduct: {
    fontSize: "12px"
  },
  featureBigProduct: {
    fontSize: "28px"
  },
  title: {
    fontSize: "1em",
    paddingLeft: padding.Normal,
    paddingRight: padding.Normal,
    marginTop: padding.Large,
    marginBottom: padding.Normal,
    "& a": {
      color: blackColor,
      fontWeight: "bold"
    },
    height: "3em" /* exactly three lines */,
    // textOverflow: "-o-ellipsis-lastline",

    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  bigTitle: {
    marginBottom: padding.Large,
    height: "4em"
  },
  extensionInfo: {
    paddingLeft: padding.Normal,
    paddingRight: padding.Normal,
    marginBottom: padding.XLarge,
    color: grayColor[1],
    fontSize: "17px"
  },
  importLot: {
    // backgroundColor: "#ddd"
  },
  marketInfo: {
    borderTop: "1px solid #eee",
    paddingTop: padding.Normal,
    paddingBottom: padding.Normal,
    marginRight: padding.Normal,
    marginLeft: padding.Normal,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: fontSize.Small
  },
  price: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0"
  },
  stats: {
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "3px",
      width: "16px",
      height: "16px",
      marginRight: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "3px",
      fontSize: "16px",
      marginRight: "3px"
    }
  },
  productStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0"
  },
  campaignGoal: {
    fontSize: "12px",
    padding: "8px"
  },
  goalInfo: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export default JPProductItemStyle;
