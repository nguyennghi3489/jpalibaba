import { container } from "assets/jss/material-dashboard-pro-react.js";
import { fontSize, padding } from "assets/jss/style-core";

const productDetailPageStyle = (theme) => ({
  container: {
    ...container,
    zIndex: "4",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "100px",
    },
    backgroundColor: 'white'
  },
  productName: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: padding.Normal,
  },
  brandInfo: {
    textAlign: "center",
    "& li": {
      listStyleType: "none",
      display: "inline-block",
      marginLeft: padding.Normal,
      marginRight: padding.Normal,
    },
  },
  mainImage: {
    maxWidth: "100%",
    width: "100%",
  },
  brandItem: {
    fontSize: fontSize.Normal,
    display: "flex",
    alignItems: "center",
  },
  detailInfo: {
    marginTop: padding.Giant,
  },
  labelText: {
    fontSize: fontSize.Normal,
    display: "flex",
    alignItems: "center",
  },
  orderInfo: {
    marginBottom: padding.XXXLarge,
    "& h3": {
      marginTop: padding.Normal,
    },
    "& p": {
      marginBottom: padding.Normal,
    },
  },
  valueText: {
    fontWeight: "bold",
    fontSize: fontSize.Giant,
  },
  campaignGoal: {
    fontSize: "18px",
    padding: "8px",
    marginBottom: padding.XXXLarge,
  },
  goalInfo: {
    marginTop: padding.Small,
    display: "flex",
    justifyContent: "space-between",
  },
  totalMoney: {
    marginBottom: padding.Large,
    fontSize: "20px",
  },
  imageContainer: {
    backgroundColor: "white",
    border: '1px solid #ddd',
  },
  information: {
    marginBottom: '20px'
  }
});

export default productDetailPageStyle;
