import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Schedule from "@material-ui/icons/Schedule";
import AttachMoney from "@material-ui/icons/AttachMoney";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import classNames from "classnames";

import styles from "./JPProductItemStyle.js";

const useStyles = makeStyles(styles);

export default function JPProductItem({
  productImage,
  title,
  featureSmallProduct,
  featureBigProduct,
  description
}) {
  const classes = useStyles();

  const jPProductItemClasses = classNames({
    [classes.featureSmallProduct]: featureSmallProduct,
    [classes.featureBigProduct]: featureBigProduct,
    [classes.container]: true
  });
  return (
    <div className={jPProductItemClasses}>
      <div className={classes.imageWrapper}>
        <img src={productImage} className={classes.image} />
      </div>
      <h4 className={classes.title}>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          {title}
        </a>
      </h4>
      <div className={classes.extensionInfo}>
        <p>{description}</p>
      </div>
      <div className={`${classes.marketInfo} ${classes.importLot}`}>
        <VerifiedUser />
        <span>
          Minimum import lot: <b>1000 Units</b>
        </span>
      </div>
      <div className={classes.marketInfo}>
        <div className={`${classes.stats} ${classes.price}`}>
          <AttachMoney />
          <b>500.000 JPY</b>
        </div>
        <div className={`${classes.stats} ${classes.productStats}`}>
          <Schedule /> <b>20 Days</b>
        </div>
      </div>
    </div>
  );
}
