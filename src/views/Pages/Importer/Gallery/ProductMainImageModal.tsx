import { LinearProgress, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import { getGallery } from "provider/actions";
import { Gallery } from "provider/models";
import { ListQuery } from "provider/models/common";
import { AppState } from "provider/reducer";
import { getAgencyIdSelector } from "provider/selectors";
import {
  getGalleryImagesSelector,
  getGalleryProcessingStatusSelector
} from "provider/selectors/gallery";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AddImageCard } from "./AddNewImageCard";
import { ImageSelectCard } from "./ImageSelectCard";

interface Props {
  currentImageId: string;
  onSubmit: (image: Gallery) => void;
  getGallery: (query: ListQuery) => void;
  agencyId: string;
  processing: boolean;
  images: Gallery[];
}
const ProductMainImageModalC: FC<Props> = ({
  agencyId,
  getGallery,
  currentImageId,
  images,
  processing,
  onSubmit
}) => {
  const [pickedItemIdState, setPickedItemIdState] = useState(
    currentImageId || ""
  );

  useEffect(() => {
    setPickedItemIdState(currentImageId);
  }, [currentImageId]);

  const isSelectedItem = (key: string) => {
    return pickedItemIdState === key;
  };

  const onSelect = (id: string) => {
    setPickedItemIdState(id);
  };

  useEffect(() => {
    if (pickedItemIdState) {
      const selectedImage = images.filter(
        item => pickedItemIdState === item.id
      );
      if (selectedImage.length > 0) {
        onSubmit(selectedImage[0]);
      }
    }
  }, [pickedItemIdState, images, onSubmit]);

  useEffect(() => {
    if (agencyId) {
      const initialGalleryQuery = {
        agencyId: agencyId,
        limit: "10",
        offset: "0"
      };
      getGallery(initialGalleryQuery);
    }
    // eslint-disable-next-line
  }, [agencyId, getGallery]);

  return (
    <div style={styles.modalContainer}>
      <Card>
        <CardHeader color="primary" icon>
          <Typography variant="h6" component="h6" style={styles.title}>
            Pick The Product Image
          </Typography>
          {processing && <LinearProgress />}
        </CardHeader>
        <CardBody>
          <Grid container>
            <Grid xs={12} md={4} style={styles.addImageCard}>
              <AddImageCard />
            </Grid>
            <Grid xs={12} md={8}>
              <div style={styles.container}>
                {images.map(item => (
                  <div style={styles.cardWrapper} key={item.id}>
                    <ImageSelectCard
                      item={item}
                      onSelect={onSelect}
                      selected={isSelectedItem(item.id)}
                    />
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  agencyId: getAgencyIdSelector(state),
  images: getGalleryImagesSelector(state),
  processing: getGalleryProcessingStatusSelector(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGallery: (query: ListQuery) => dispatch(getGallery(query))
});

export const ProductMainImageModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductMainImageModalC);

const styles = {
  modalContainer: {
    width: "100%",
    overflow: "auto",
    margin: "0 auto",
    background: "white",
    maxHeight: "80%",
    top: "10%",
    position: "relative" as "relative"
  },

  container: {
    display: "flex" as "flex",
    flex: 1,
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap"
  },
  cardWrapper: {
    width: "33%",
    padding: "0 8px",
    marginBottom: 16
  },
  title: {
    padding: 16,
    color: "black"
  },
  addImageCard: {
    alignSelf: "flex-start"
  },
  button: {
    float: "right",
    marginRight: "16px"
  }
};
