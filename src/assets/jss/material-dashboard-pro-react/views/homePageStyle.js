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

const pricingPageStyle = theme => ({
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
  title: {
    ...defaultFont,
    color: blackColor,
    marginTop: "5vh",
    marginBottom: "30px",
    textAlign: "center"
  },
  description: {
    fontSize: "18px",
    color: whiteColor,
    textAlign: "center"
  },
  cardTitleWhite: {
    ...cardTitle,
    color: whiteColor + " !important"
  },
  cardCategory: {
    color: grayColor[0],
    marginTop: "10px"
  },
  cardCategoryWhite: {
    color: whiteColor,
    marginTop: "10px"
  },
  icon: {
    color: "rgba(" + hexToRgb(whiteColor) + ", 0.76)",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid " + grayColor[11],
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconWhite: {
    color: whiteColor
  },
  iconRose: {
    color: roseColor[0]
  },
  marginTop30: {
    marginTop: "30px"
  },
  stats: {
    color: grayColor[0],
    fontSize: "12px",
    lineHeight: "22px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px"
    }
  },
  productStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0"
  },
  price: {
    color: "inherit",
    "& h4": {
      marginBottom: "0px",
      marginTop: "0px"
    }
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    verticalAlign: "unset",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: grayColor[14]
    }
  }
});

export default pricingPageStyle;
