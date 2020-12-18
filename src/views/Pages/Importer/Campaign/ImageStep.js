// core components
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import React from "react";
import { ProductGalleryModal } from "../Gallery/ProductGalleryModal";
import { ProductMainImageModal } from "../Gallery/ProductMainImageModal";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center",
  },
  inputAdornmentIcon: {
    color: "#555",
  },
  inputAdornment: {
    position: "relative",
  },
  galleryContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  galleryImage: {
    width: "40%",
  },
  required: {
    color: "red",
    fontSize: "10px",
  },
};

class CampaignStep extends React.Component {
  state = {
    isGalleryModalOpen: false,
    selectedGalleryImages: [],
    selectedTmpGalleryImages: null,

    isMainImageModalOpen: false,
    selectedMainImage: null,
    selectedTmpMainImage: null,
  };

  openMainImageModal = () => {
    this.setState({ isMainImageModalOpen: true });
  };
  closeMainImageModal = () => {
    this.setState({ isMainImageModalOpen: false });
  };

  openGalleryModal = () => {
    this.setState({ isGalleryModalOpen: true });
  };
  closeGalleryModal = () => {
    this.setState({ isGalleryModalOpen: false });
  };

  setSelectedTmpMainImage = (item) => {
    this.setState({ selectedTmpMainImage: item });
  };

  setSelectedTmpGalleryImages = (items) => {
    this.setState({ selectedTmpGalleryImages: items });
  };

  updateMainImageAndCloseModal = () => {
    const tempImage = this.state.selectedTmpMainImage;
    this.setState({
      selectedMainImage: tempImage,
      isMainImageModalOpen: false,
    });
  };

  updateGalleryAndCloseModal = () => {
    const tempImage = this.state.selectedTmpGalleryImages;
    this.setState({
      selectedGalleryImages: tempImage,
      isGalleryModalOpen: false,
    });
  };
  sendState() {
    const { selectedGalleryImages, selectedMainImage } = this.state;
    return {
      selectedMainImage: selectedMainImage,
      galleryImages: selectedGalleryImages,
    };
  }

  isValidated = async () => {
    if (!this.state.selectedMainImage) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { classes } = this.props;
    const {
      isMainImageModalOpen,
      isGalleryModalOpen,
      selectedGalleryImages,
      selectedMainImage,
    } = this.state;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>
            Product Image
            <p style={styles.required}>(Require to add product)</p>
          </h4>

          {selectedMainImage && (
            <div className={classes.galleryContainer}>
              <img
                src={selectedMainImage.mediumUrl}
                title={selectedMainImage.title}
                className={classes.galleryImage}
                alt={selectedMainImage.title}
              />
            </div>
          )}
        </GridItem>
        <GridItem xs={12} sm={12} style={styles.section}>
          <Button onClick={this.openMainImageModal}>Add Photo</Button>
        </GridItem>
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Product Gallery</h4>
          {selectedGalleryImages.length > 0 && (
            <div className={classes.galleryContainer}>
              {selectedGalleryImages.map((item) => (
                <img
                  src={item.mediumUrl}
                  title={item.title}
                  className={classes.galleryImage}
                  alt={item.title}
                />
              ))}
            </div>
          )}
        </GridItem>
        <GridItem xs={12} sm={12} style={styles.section}>
          <Button onClick={this.openGalleryModal}>Add Photo</Button>
        </GridItem>
        <Dialog
          open={isMainImageModalOpen}
          onClose={this.closeMainImageModal}
          aria-labelledby="form-dialog-title"
          fullWidth
          fullScreen
        >
          <DialogTitle id="form-dialog-title">Main Image Selection</DialogTitle>
          <DialogContent>
            <ProductMainImageModal
              currentImage={selectedMainImage}
              onSubmit={this.setSelectedTmpMainImage}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeMainImageModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateMainImageAndCloseModal} color="primary">
              Import
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={isGalleryModalOpen}
          onClose={this.closeGalleryModal}
          aria-labelledby="form-dialog-title"
          fullWidth
          fullScreen
        >
          <DialogTitle id="form-dialog-title">
            Gallery Images Selection
          </DialogTitle>
          <DialogContent>
            <ProductGalleryModal
              pickedImages={selectedGalleryImages.map((item) => item.id)}
              onSubmit={this.setSelectedTmpGalleryImages}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeGalleryModal} color="primary">
              Cancel
            </Button>
            <Button onClick={this.updateGalleryAndCloseModal} color="primary">
              Import
            </Button>
          </DialogActions>
        </Dialog>
      </GridContainer>
    );
  }
}

export default withStyles(style)(CampaignStep);

const styles = {
  section: {
    textAlign: "center",
    marginBottom: 64,
  },
  required: {
    color: "red",
    fontSize: "10px",
  },
};
