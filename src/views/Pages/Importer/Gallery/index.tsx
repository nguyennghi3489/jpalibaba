import { LinearProgress } from "@material-ui/core";
import {
  getGallery,
  ModalType,
  removeGallery,
  showModal,
} from "provider/actions";
import { Gallery } from "provider/models";
import { ListQuery } from "provider/models/common";
import { AppState } from "provider/reducer";
import { getAgencyIdSelector } from "provider/selectors";
import {
  getGalleryImagesSelector,
  getGalleryImagesTotalNumberSelector,
  getGalleryProcessingStatusSelector,
} from "provider/selectors/gallery";
import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AddImageCard } from "./AddNewImageCard";
import { ImageCard } from "./ImageCard";

interface Props {
  agencyId: string;
  getGallery: (query: ListQuery) => void;
  removeGallery: (id: string) => void;
  showModal: (type: ModalType, message: string, action: Function) => void;
  images: Gallery[];
  total: number;
  processing: boolean;
}

const GalleryManagementC: FC<Props> = ({
  agencyId,
  getGallery,
  removeGallery,
  images,
  showModal,
  total,
  processing,
}) => {
  const initialQuery = {
    agencyId: agencyId,
    limit: "10",
    offset: "0",
  };

  const showDeleteModal = (id: string) => {
    showModal(ModalType.Confirm, "Are you sure to delete this photo ?", () => {
      removeGallery(id);
    });
  };

  useEffect(() => {
    getGallery(initialQuery);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {processing && <LinearProgress />}
      <div style={styles.container}>
        <div style={styles.cardWrapper}>
          <AddImageCard />
        </div>
        {images &&
          images.map((item) => (
            <div style={styles.cardWrapper} key={item.id}>
              <ImageCard item={item} remove={() => showDeleteModal(item.id)} />
            </div>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  agencyId: getAgencyIdSelector(state),
  images: getGalleryImagesSelector(state),
  total: getGalleryImagesTotalNumberSelector(state),
  processing: getGalleryProcessingStatusSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGallery: (query: ListQuery) => dispatch(getGallery(query)),
  removeGallery: (id: string) => dispatch(removeGallery(id)),
  showModal: (type: ModalType, message: string, action: Function) =>
    dispatch(showModal(type, message, action)),
});

export const GalleryManagement = connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryManagementC);

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row" as "row",
    flexWrap: "wrap" as "wrap",
  },
  cardWrapper: {
    width: "25%",
    padding: 8,
  },
};
