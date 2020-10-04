import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Input,
} from "@material-ui/core";
import PictureUpload from "components/CustomUpload/PictureUpload";
import productPlaceHolder from "assets/img/product-placeholder.jpeg";

export const AddImageCard = () => {
  return (
    <Card style={styles.imageCard}>
      <CardHeader title="Upload New Image" />
      <CardContent style={styles.content}>
        <Input
          type="text"
          style={styles.nameInput}
          placeholder="Picture Title"
        />
        <PictureUpload
          showImage={true}
          image={productPlaceHolder}
          value={null}
          onUpload={() => {}}
        />
      </CardContent>
      <CardActions style={styles.actions}>
        <Button size="small" color="primary">
          Upload
        </Button>
      </CardActions>
    </Card>
  );
};

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap",
  },
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
  actions: {
    alignSelf: "flex-end",
  },
  nameInput: {
    width: "100%",
  },
};
