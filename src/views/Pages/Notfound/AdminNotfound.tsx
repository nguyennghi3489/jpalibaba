import React from "react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { appUrl } from "routing";

export const AdminNotfound = () => {
  return (
    <Card>
      <CardBody>
        <Typography>Not Found Page</Typography>
        <Typography>
          Go back to <Link to={appUrl.profile}>admin page</Link>
        </Typography>
      </CardBody>
    </Card>
  );
};
