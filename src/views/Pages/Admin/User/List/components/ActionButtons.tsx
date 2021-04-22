import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { appUrl } from "routing";

interface Props {
  id: string;
}
export const ActionButtons = ({ id }: Props) => (
  <NavLink to={`${appUrl.updateUserInfo}/${id}`}>
    <Tooltip title="Update User">
      <IconButton aria-label="Update User">
        <EditIcon />
      </IconButton>
    </Tooltip>
  </NavLink>
);
