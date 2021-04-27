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
import { NavLink } from "react-router-dom";
import moment from "moment";
import { OrderStatusChip } from "components/OrderStatusChip";

interface Props {
  eventType: number;
  eventId: string;
  eventStatus?: number;
}
const EventType = ({ eventType, eventId, eventStatus }: Props) => {
  switch (eventType) {
    case 0:
      return (
        <>
          <NavLink to={`/admin/order-detail/${eventId}`}>New order </NavLink>{" "}
          from
        </>
      );
    case 1:
      return (
        <>
          <NavLink to={`/admin/order-detail/${eventId}`}>Order</NavLink> is
          updated to {eventStatus && <OrderStatusChip status={eventStatus} />}{" "}
          from
        </>
      );
    default:
      return null;
  }
};

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
                        Date: {moment(item.updated).toString()}
                      </Typography>
                      <Typography>
                        <EventType
                          eventType={item.eventType}
                          eventId={item.eventId}
                          eventStatus={item.eventStatus}
                        />{" "}
                        {item.from}
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
