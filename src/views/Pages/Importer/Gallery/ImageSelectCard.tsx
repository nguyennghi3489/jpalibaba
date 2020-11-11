import React, { useState } from "react";

import { Card, CardHeader, CardContent } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { ImageItem } from "provider/models";

interface ImageCardProp {
  item: ImageItem;
}
export const ImageSelectCard = ({ item }: ImageCardProp) => {
  const [check, setCheck] = useState(false);
  return (
    <Card style={styles.imageCard}>
      <CardHeader
        action={
          <Checkbox
            checked={check}
            onChange={() => {
              setCheck(!check);
            }}
            inputProps={{ "aria-label": "primary checkbox" }}
          />
        }
        title={item.title}
        titleTypographyProps={{ variant: "body2" }}
        subheader={item.created}
        subheaderTypographyProps={{ variant: "overline" }}
      />
      <CardContent style={styles.content}>
        <img src={item.mediumUrl} title={item.title} style={styles.image} />
      </CardContent>
    </Card>
  );
};

const styles = {
  imageCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
  },
  image: {
    maxWidth: "100%",
  },
  content: {
    paddingTop: 0,
  },
};
