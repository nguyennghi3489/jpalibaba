import { Grid, Link, Typography } from "@material-ui/core";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardText from "components/Card/CardText";
import React from "react";
import { appUrl } from "routing";

export const InvalidOrder = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Card>
          <CardHeader color="rose" text>
            <CardText color="rose">
              <h4>Empty Cart</h4>
            </CardText>
          </CardHeader>
          <CardBody>
            <Typography>There is order matched with your order ID</Typography>
            <Typography>
              Go back to{" "}
              <Link href={appUrl.importerOrders}>order list page</Link> to view
              available orders
            </Typography>
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
};
