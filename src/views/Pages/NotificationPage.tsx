import React from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { DraftsRounded } from "@material-ui/icons";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import { useGetNotification } from "hooks/useGetNotification";

const NotificationPage = () => {
  const [value] = useGetNotification();
  return (
    <Grid container>
      <Grid xs={12}>
        {value.map((item) => (
          <Card>
            <CardBody>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DraftsRounded />
                  </ListItemIcon>
                  <ListItemText>
                    <>
                      <Typography>Date: SomeDate</Typography>
                      <Typography>The order from "abc"</Typography>
                    </>
                  </ListItemText>
                </ListItem>
              </List>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default NotificationPage;
