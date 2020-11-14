import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Input,
} from "@material-ui/core";
import productPlaceHolder from "assets/img/product-placeholder.jpeg";
import PictureUpload from "components/CustomUpload/PictureUpload";
import { addImage } from "provider/actions";
import { AddGalleryPayload } from "provider/models";
import React, { FC, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  addImage: (payload: AddGalleryPayload) => void;
}

const AddImageCardC: FC<Props> = ({ addImage }) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const validUpload = image && title;
  const uploadImage = () => {
    if (image) {
      addImage({ title, image });
    }
  };

  return (
    <Card style={styles.imageCard}>
      <CardHeader title="Upload New Image" />
      <CardContent style={styles.content}>
        <Input
          type="text"
          style={styles.nameInput}
          placeholder="Picture Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <PictureUpload
          showImage={true}
          image={productPlaceHolder}
          value={image}
          onUpload={(newFile: File) => setImage(newFile)}
        />
      </CardContent>
      <CardActions style={styles.actions}>
        <Button
          size="small"
          color="primary"
          onClick={uploadImage}
          disabled={!validUpload}
        >
          Upload
        </Button>
      </CardActions>
    </Card>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addImage: (payload: AddGalleryPayload) => dispatch(addImage(payload)),
});

export const AddImageCard = connect(
  null,
  mapDispatchToProps
)(AddImageCardC);

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
