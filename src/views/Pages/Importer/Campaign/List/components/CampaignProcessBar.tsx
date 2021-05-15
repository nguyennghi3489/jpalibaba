import React from "react";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress";

interface Props {
  goalPercent: number;
  goal: number;
  orders: number;
}

export const CampaignProcessBar = ({ goalPercent, orders, goal }: Props) => (
  <>
    <CustomLinearProgress
      color="primary"
      variant="determinate"
      value={goalPercent}
    />
    {`${goalPercent}% (${orders}/${goal} items)`}
  </>
);
