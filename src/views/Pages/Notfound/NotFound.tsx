import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { appUrl } from "routing";
import CardHeader from "components/Card/CardHeader";

export const Notfound = () => {
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={6} md={4}>
        <Card>
          <CardHeader>
            <Typography variant="h5">NotFound</Typography>
          </CardHeader>
          <CardBody>
            <Typography>There is page matched with your url</Typography>
            <Typography>
              Go back to <Link to={appUrl.homePage}>home page</Link>
            </Typography>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
};
