import { Grid, Link, Typography } from "@material-ui/core";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardText from "components/Card/CardText";
import React from "react";

export const EmptyCart = () => {
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
            <Typography>There is no items in your cart</Typography>
            <Typography>
              Go back to <Link href="/">homepage</Link> to add new item
            </Typography>
          </CardBody>
        </Card>
      </Grid>
    </Grid>
  );
};
