import { LinearProgress } from "@material-ui/core";
import { getGallery, removeGallery } from "provider/actions";
import { GalleryResponse, GetGalleryQuery } from "provider/models";
import { AppState } from "provider/reducer";
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
  getGallery: (query: GetGalleryQuery) => void;
  removeGallery: (id: string) => void;
  images: GalleryResponse[];
  total: number;
  processing: boolean;
}

const GalleryManagementC: FC<Props> = ({
  getGallery,
  removeGallery,
  images,
  total,
  processing,
}) => {
  const initialQuery = {
    limit: "10",
    offset: "0",
  };
  // const [query, setQuery] = useState<GetGalleryQuery>(initialQuery);

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
            <div style={styles.cardWrapper} key={item.key}>
              <ImageCard item={item} remove={removeGallery} />
            </div>
          ))}
      </div>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  images: getGalleryImagesSelector(state),
  total: getGalleryImagesTotalNumberSelector(state),
  processing: getGalleryProcessingStatusSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getGallery: (query: GetGalleryQuery) => dispatch(getGallery(query)),
  removeGallery: (id: string) => dispatch(removeGallery(id)),
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
