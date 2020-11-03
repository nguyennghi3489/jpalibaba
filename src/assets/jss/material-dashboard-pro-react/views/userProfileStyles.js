import {
  cardTitle,
  grayColor,
  whiteColor,
  primaryColor,
} from "assets/jss/material-dashboard-pro-react.js";

const userProfileStyles = {
  cardTitle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    "& small": {
      fontSize: "80%",
      fontWeight: "400",
    },
  },
  cardCategory: {
    marginTop: "10px",
    color: grayColor[0] + " !important",
    textAlign: "center",
  },
  description: {
    color: grayColor[0],
  },
  updateProfileButton: {
    float: "right",
  },
  select: {
    padding: "12px 0 7px",
    fontSize: ".75rem",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    // textTransform: "uppercase",
    color: grayColor[2],
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent",
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)",
    },
    "& + input + svg": {
      transition: "all 300ms linear",
    },
  },
  selectFormControl: {
    margin: "7px 0 17px 0 !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: grayColor[4] + "!important",
      },
      "&:after": {
        borderBottomColor: primaryColor[0] + "!important",
      },
    },
  },
  selectLabel: {
    fontSize: "12px",
    // textTransform: "uppercase",
    color: grayColor[2] + " !important",
    top: "8px",
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: whiteColor,
      backgroundClip: "padding-box",
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit",
    },
    "& > div + div": {
      maxHeight: "266px !important",
    },
  },
  datetime: {
    marginTop: "20px",
  },
  createButton: {
    marginTop: "20px",
    float: "right",
  },
  box: {
    display: "flex",
    justifyAlign: "space-between",
    alignItems: "center",
  },
  lastButton: {
    marginRight: "16px",
  },
  img: {
    width: "100%",
    maxWidth: "100%",
  },
  thumbs: {
    position: "relative",
    "& svg": {
      color: "red",
      position: "absolute",
      top: 2,
      right: 15,
    },
  },

  uploadWrapper: {
    position: "relative",
    marginRight: 16,
  },

  uploadInput: {
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },

  buttonLink: {
    color: "white",
  },
  actionSection: {
    display: "inline-block",
    float: "right",
  },
  mainImage: {
    width: "100%",
  },
  checked: {
    "& + span": {
      color: "red",
    },
  },
  actionButton: {
    float: "right",
  },
};
export default userProfileStyles;
