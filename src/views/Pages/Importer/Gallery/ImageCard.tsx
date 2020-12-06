import { Card, CardContent, CardHeader, IconButton } from "@material-ui/core";
import { HighlightOff } from "@material-ui/icons";
import { ImageItem } from "provider/models";
import React, { memo } from "react";

interface ImageCardProp {
  item: ImageItem;
  remove?: (id: string) => void;
}
export const ImageCard = memo(({ item, remove = () => {} }: ImageCardProp) => {
  return (
    <Card style={styles.imageCard}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={() => remove(item.id)}>
            <HighlightOff color="error" />
          </IconButton>
        }
        title={item.title}
        titleTypographyProps={{ variant: "body2" }}
        subheader={item.created}
        subheaderTypographyProps={{ variant: "overline" }}
      />
      <CardContent style={styles.content}>
        <img
          src={item.mediumUrl}
          title={item.title}
          style={styles.image}
          alt={item.title}
        />
      </CardContent>
    </Card>
  );
});

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
