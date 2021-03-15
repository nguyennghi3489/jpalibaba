import { LinearProgress, Typography } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { remove } from "lodash/fp";
import { getGallery } from "provider/actions";
import { getAgencyIdSelector } from "provider/selectors";
import {
  getGalleryImagesSelector,
  getGalleryImagesTotalNumberSelector,
  getGalleryProcessingStatusSelector
} from "provider/selectors/gallery";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AddImageCard } from "./AddNewImageCard";
import { ImageSelectCard } from "./ImageSelectCard";

export const ProductGalleryModalC = ({
  agencyId,
  images,
  getGallery,
  onSubmit,
  processing,
  pickedImages = []
}) => {
  const [pickedItemsState, setPickedItemsState] = useState(pickedImages || []);

  const isSelectedItem = key => {
    if (pickedItemsState.length > 0) {
      return pickedItemsState.filter(item => item === key).length > 0;
    }
    return false;
  };

  const handleSelect = (currentId, checked) => {
    let newList;
    if (pickedItemsState.includes(currentId)) {
      newList = remove(id => id === currentId)(pickedItemsState);
    } else {
      newList = [...pickedItemsState, currentId];
    }
    setPickedItemsState(newList);
  };

  useEffect(() => {
    if (pickedItemsState.length > 0) {
      const selectedImages = images.filter(item =>
        pickedItemsState.includes(item.id)
      );
      onSubmit(selectedImages);
    }
  }, [pickedItemsState]);

  useEffect(() => {
    if (agencyId) {
      const initialGalleryQuery = {
        agencyId: agencyId,
        limit: "10",
        offset: "0"
      };
      getGallery(initialGalleryQuery);
    }
  }, [agencyId, getGallery]);

  return (
    <div style={styles.modalContainer}>
      Hello World
      <Card>
        <CardHeader color="primary" icon>
          <Typography variant="h6" component="h6" style={styles.title}>
            Pick The Product Image
          </Typography>
          {processing && <LinearProgress />}
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} md={4} style={styles.addImageCard}>
              <AddImageCard />
            </GridItem>
            <GridItem xs={12} md={8}>
              <div style={styles.container}>
                {images.map(item => (
                  <div style={styles.cardWrapper} key={item.id}>
                    <ImageSelectCard
                      item={item}
                      onSelect={handleSelect}
                      selected={isSelectedItem(item.id)}
                    />
                  </div>
                ))}
              </div>
            </GridItem>
          </GridContainer>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
  agencyId: getAgencyIdSelector(state),
  images: getGalleryImagesSelector(state),
  total: getGalleryImagesTotalNumberSelector(state),
  processing: getGalleryProcessingStatusSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getGallery: query => dispatch(getGallery(query))
});

export const ProductGalleryModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductGalleryModalC);

const styles = {
  modalContainer: {
    width: "100%",
    overflow: "auto",
    margin: "0 auto",
    background: "white",
    maxHeight: "80%",
    top: "10%",
    position: "relative"
  },

  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
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
