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
import { AppState } from "provider/reducer";
import { getAgencyIdSelector } from "provider/selectors";
import {
  getGalleryProcessingStatusSelector,
  getGalleryResetStatusSelector,
} from "provider/selectors/gallery";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  agencyId: string;
  addImage: (payload: AddGalleryPayload) => void;
  processing: boolean;
  reset: boolean;
}

const AddImageCardC: FC<Props> = ({
  addImage,
  processing,
  reset,
  agencyId,
}) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const validUpload = image && title;
  const uploadImage = () => {
    if (image) {
      addImage({ title, image, agencyId });
    }
  };

  useEffect(() => {
    if (reset) {
      setTitle("");
      setImage(null);
    }
  }, [reset]);

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
          disabled={!validUpload || processing}
        >
          Upload
        </Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state: AppState) => ({
  agencyId: getAgencyIdSelector(state),
  processing: getGalleryProcessingStatusSelector(state),
  reset: getGalleryResetStatusSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addImage: (payload: AddGalleryPayload) => dispatch(addImage(payload)),
});

export const AddImageCard = connect(
  mapStateToProps,
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
