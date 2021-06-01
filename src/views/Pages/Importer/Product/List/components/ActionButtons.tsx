import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Tooltip } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { appUrl } from "routing";

interface Props {
  id: string;
  hasImage: boolean;
  showDeleteModal: (id: string) => void;
}
export const ActionButtons = ({ id, hasImage, showDeleteModal }: Props) => (
  <>
    {hasImage ? (
      <>
        <NavLink to={`/admin${appUrl.createCampaignPage}/${id}`}>
          <Tooltip title="Create New Campaign">
            <IconButton aria-label="create campaign">
              <AddIcon />
            </IconButton>
          </Tooltip>
        </NavLink>

        <NavLink to={`/admin${appUrl.updateProductPage}/${id}`}>
          <Tooltip title="Edit Product">
            <IconButton aria-label="edit product">
              <EditIcon />
            </IconButton>
          </Tooltip>
        </NavLink>
        <Tooltip title="Delete Product">
          <IconButton
            aria-label="delete product"
            onClick={() => showDeleteModal(id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </>
    ) : (
      <NavLink to={`/admin${appUrl.updateProductPage}/${id}`}>
        <Tooltip title="Need to update to create campaign">
          <IconButton color="secondary" aria-label="edit product">
            <EditIcon />
          </IconButton>
        </Tooltip>
      </NavLink>
    )}
  </>
);
