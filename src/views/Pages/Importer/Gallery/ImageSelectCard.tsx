import { Card, CardContent, CardHeader } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import { ImageItem } from "provider/models";
import React, { memo, useEffect, useState } from "react";

interface ImageCardProp {
  item: ImageItem;
  onSelect: (key: string, status: boolean) => void;
  selected: boolean;
}
export const ImageSelectCard = memo(
  ({ item, onSelect, selected }: ImageCardProp) => {
    const [check, setCheck] = useState(selected);

    useEffect(() => {
      setCheck(selected);
    }, [selected]);

    return (
      <Card style={styles.imageCard}>
        <CardHeader
          action={
            <Checkbox
              checked={check}
              onChange={() => {
                console.log("HELLO ");
                setCheck(!check);
                onSelect(item.id, !check);
              }}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          }
          title={item.title}
          titleTypographyProps={{ variant: "body2" }}
          // subheader={item.created}
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
  }
);

const styles = {
  imageCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between"
  },
  image: {
    maxWidth: "100%"
  },
  content: {
    paddingTop: 0
  }
};
