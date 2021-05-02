import React from "react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Typography } from "@material-ui/core";
import CardHeader from "components/Card/CardHeader";
import CardText from "components/Card/CardText";
import { Link } from "react-router-dom";
import { appUrl } from "routing";

export const AdminNotfound = () => {
  console.log("NOT FOUND RIGHT");
  return (
    <Card>
      <CardBody>
        <Typography>There is page matched with your url</Typography>
        <Typography>
          Go back to <Link to={appUrl.profile}>admin page</Link>
        </Typography>
      </CardBody>
    </Card>
  );
};
