import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Schedule from "@material-ui/icons/Schedule";
import AttachMoney from "@material-ui/icons/AttachMoney";
import VerifiedUser from "@material-ui/icons/VerifiedUser";

import classNames from "classnames";

import styles from "./JPProductItemStyle.js";
import { appUrl } from "routing";

const useStyles = makeStyles(styles);

export default function JPProductItem({
  data,
  productImage,
  title,
  featureSmallProduct,
  featureBigProduct,
  description,
}) {
  const classes = useStyles();
  const jPProductItemClasses = classNames({
    [classes.featureSmallProduct]: featureSmallProduct,
    [classes.featureBigProduct]: featureBigProduct,
    [classes.container]: true,
  });
  return (
    <div className={jPProductItemClasses}>
      <div className={classes.imageWrapper}>
        <img src={data.image} className={classes.image} />
      </div>
      <h4
        className={classNames({
          [classes.bigTitle]: featureBigProduct,
          [classes.title]: true,
        })}
      >
        <NavLink to={appUrl.productDetailPage}>{data.title}</NavLink>
      </h4>
      {data.description && (
        <div className={classes.extensionInfo}>
          <p>{data.description}</p>
        </div>
      )}
      <div className={classes.campaignGoal}>
        <div className={classes.goalInfo}>
          <span>
            Goal: <b>{data.goalPercent}%</b>
          </span>
          <span>
            Placed: <b>{data.currentAmountOfOrders}</b>
          </span>
        </div>
        <CustomLinearProgress
          variant="determinate"
          color="primary"
          value={data.goalPercent}
        />
      </div>
      <div className={`${classes.marketInfo} ${classes.importLot}`}>
        <VerifiedUser />
        <span>
          Minimum import lot: <b>{data.minAmountPerOrder} Units</b>
        </span>
      </div>
      <div className={classes.marketInfo}>
        <div className={`${classes.stats} ${classes.price}`}>
          <AttachMoney />
          <b>{data.unitPrice} JPY</b>
        </div>
        <div className={`${classes.stats} ${classes.productStats}`}>
          <Schedule /> <b>20 Days</b>
        </div>
      </div>
    </div>
  );
}
