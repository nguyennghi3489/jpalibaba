import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Tooltip } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { appUrl } from "routing";

interface Props {
  id: string;
}
export const ActionButtons = ({ id }: Props) => (
  <NavLink to={`${appUrl.orderDetailPage}/${id}`}>
    <Tooltip title="View Order Detail">
      <IconButton aria-label="view order detail">
        <OpenInNewIcon />
      </IconButton>
    </Tooltip>
  </NavLink>
);
