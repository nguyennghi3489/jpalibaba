import { Modal, Typography } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { getGallery } from "provider/actions";
import { initialGalleryQuery } from "provider/models/gallery";
import {
  getGalleryImagesSelector,
  getGalleryImagesTotalNumberSelector,
  getGalleryProcessingStatusSelector,
} from "provider/selectors/gallery";
import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { AddImageCard } from "./AddNewImageCard";
import { ImageSelectCard } from "./ImageSelectCard";

export const GalleryModalC = ({
  images,
  getGallery,
  open,
  onClose,
  onSubmit,
  pickedImages = [],
}) => {
  const [pickedItemsState, setPickedItemsState] = useState(pickedImages);
  useEffect(() => {
    setPickedItemsState(pickedImages);
  }, [pickedImages]);

  const onSelect = (selectedKey, pickedStatus) => {
    let newPickedItems;
    if (pickedStatus) {
      newPickedItems = [...pickedItemsState, selectedKey];
    } else {
      newPickedItems = pickedItemsState.filter(
        (item) => item.key !== selectedKey
      );
    }
    setPickedItemsState(newPickedItems);
  };

  const isSelectedItem = useCallback(
    (key) => {
      if (pickedItemsState.length > 0) {
        return pickedItemsState.filter((item) => item === key).length > 0;
      }
      return false;
    },
    [pickedItemsState]
  );

  const submitImages = () => {
    const pickedImage = images.filter((item) =>
      pickedItemsState.includes(item.key)
    );

    onSubmit(pickedImage);
    onClose();
  };

  useEffect(() => {
    getGallery(initialGalleryQuery);
    // eslint-disable-next-line
  }, []);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={styles.modalContainer}>
        <Card>
          <CardHeader color="primary" icon>
            <Typography variant="h6" component="h6" style={styles.title}>
              Pick The Product Image
            </Typography>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={12} md={4} style={styles.addImageCard}>
                <AddImageCard />
              </GridItem>
              <GridItem xs={12} md={8}>
                <div style={styles.container}>
                  {images.map((item) => (
                    <div style={styles.cardWrapper} key={item.key}>
                      <ImageSelectCard
                        item={item}
                        onSelect={onSelect}
                        selected={isSelectedItem(item.key)}
                      />
                    </div>
                  ))}
                </div>
              </GridItem>
              <GridItem xs={12} md={12}>
                <Button
                  color="rose"
                  type="submit"
                  style={styles.button}
                  onClick={submitImages}
                >
                  Submit
                </Button>
                <Button type="submit" style={styles.button} onClick={onClose}>
                  CANCEL
                </Button>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  images: getGalleryImagesSelector(state),
  total: getGalleryImagesTotalNumberSelector(state),
  processing: getGalleryProcessingStatusSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  getGallery: (query) => dispatch(getGallery(query)),
});

export const GalleryModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryModalC);

const styles = {
  modalContainer: {
    width: "80%",
    overflow: "auto",
    margin: "0 auto",
    background: "white",
    maxHeight: "80%",
    top: "10%",
    position: "relative",
  },

  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardWrapper: {
    width: "33%",
    padding: "0 8px",
    marginBottom: 16,
  },
  title: {
    padding: 16,
    color: "black",
  },
  addImageCard: {
    alignSelf: "flex-start",
  },
  button: {
    float: "right",
    marginRight: "16px",
  },
};
