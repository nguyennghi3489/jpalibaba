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
import { formatStandardDate } from "helpers";
import { NavLink } from "react-router-dom";

const NotificationPage = () => {
  const [value] = useGetNotification();
  console.log(value);
  return (
    <Grid container>
      <Grid xs={12}>
        {value.map((item: any) => (
          <Card>
            <CardBody>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DraftsRounded />
                  </ListItemIcon>
                  <ListItemText>
                    <>
                      <Typography>
                        Date: {formatStandardDate(item.updated)}
                      </Typography>
                      <Typography>
                        <NavLink
                          to={`/admin/importer-order-detail/${item.eventId}`}
                        >
                          New order
                        </NavLink>{" "}
                        from {item.from}
                      </Typography>
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
