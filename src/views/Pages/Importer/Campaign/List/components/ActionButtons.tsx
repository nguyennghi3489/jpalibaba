import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Tooltip } from "@material-ui/core";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

import { appUrl } from "routing";
import { isAfterToday } from "helpers/date";

interface Props {
  id: string;
  status: string;
  expiry: string;
  updateCampaignStatus: (id: string, status: boolean) => void;
}
export const ActionButtons = ({
  id,
  status,
  expiry,
  updateCampaignStatus,
}: Props) => (
  <>
    <NavLink to={`/admin${appUrl.campaignDetailPage}/${id}`}>
      <Tooltip title="View Campaign">
        <IconButton>
          <OpenInNewIcon />
        </IconButton>
      </Tooltip>
    </NavLink>
    {expiry && isAfterToday(expiry) && (
      <>
        {status ? (
          <Tooltip title="Deactivate Campaign">
            <IconButton onClick={() => updateCampaignStatus(id, false)}>
              <VisibilityOffIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Activate Campaign">
            <IconButton
              color="primary"
              onClick={() => updateCampaignStatus(id, true)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
        )}
      </>
    )}
  </>
);
