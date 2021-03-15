// @material-ui/core components
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import { FInput } from "components/Form/FInput";
// core components
import { FSelect } from "components/Form/FSelect";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { categoryOptions, countryOptions } from "constant";
import { FieldArray, Form, Formik } from "formik";
import { parseNewProductWithImage, yupParseToInt } from "helpers";
import {
  addImage,
  addProduct,
  pickUpdateProduct,
  resetUpdateProduct,
  updateProduct
} from "provider/actions";
import { getRetailersAction } from "provider/actions/slice/retailer";
import {
  getAddingProductImage,
  getAgencyIdSelector,
  getRetailersHasNextSelector,
  getRetailersSelector,
  getUpdatingProduct,
  getUserIdSelector
} from "provider/selectors";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import * as Yup from "yup";
import { ProductGalleryModal } from "./Gallery/ProductGalleryModal";
import { ProductMainImageModal } from "./Gallery/ProductMainImageModal";

const extraStyles = {
  galleryContainer: {
    display: "flex",
    flexWrap: "wrap"
  },
  galleryImage: {
    width: "50%"
  },
  required: {
    color: "red",
    fontSize: "10px"
  }
};

const INITIAL_VALUES = {
  title: "",
  category: "",
  brand: "",
  origin: "",
  unitPrice: "",
  video: "",
  description: "",
  pricePolicy: []
};

const UpdateProductPage = ({
  classes,
  agencyId,
  addProduct,
  updateProduct,
  getRetailersAction,
  retailers,
  pickUpdateProduct,
  updatingProduct,
  ...props
}) => {
  const [initialValues, setInitialValues] = useState(INITIAL_VALUES);
  const formikCurrent = useRef(null);
  const retailersOptions = retailers.map(item => ({
    value: item.id,
    label: item.name
  }));
  const {
    match: {
      params: { id }
    }
  } = props;

  useEffect(() => {
    pickUpdateProduct(id);
  }, [id]);

  useEffect(() => {
    if (updatingProduct) {
      var pricePolicies = updatingProduct.pricePolicies.map(item => ({
        retailId: item.retailId,
        unitPrice: item.unitPrice
      }));
      console.log(retailersOptions);
      console.log(pricePolicies);
      setInitialValues({ ...updatingProduct, pricePolicy: pricePolicies });
      setGalleryImages(updatingProduct.images);
      setSelectedMainImage(updatingProduct.image);
    }
  }, [updatingProduct, retailers]);

  const [isGalleryModalOpen, setGalleryModalOpenState] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedTmpGalleryImages, setSelectedTmpGalleryImages] = useState([]);

  const [isMainImageModalOpen, setMainImageModalOpenState] = useState(false);
  const [selectedMainImage, setSelectedMainImage] = useState(null);
  const [selectedTmpMainImage, setSelectedTmpMainImage] = useState(null);

  const closeMainImageModal = useCallback(() => {
    setMainImageModalOpenState(false);
  }, []);

  const closeGalleryModal = useCallback(() => {
    setGalleryModalOpenState(false);
  }, []);

  useEffect(() => {
    getRetailersAction();
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <Formik
                enableReinitialize
                innerRef={formikCurrent}
                initialValues={initialValues}
                validationSchema={Yup.object({
                  title: Yup.string().required(),
                  category: Yup.string().required(),
                  brand: Yup.string().required(),
                  origin: Yup.string().required(),
                  unitPrice: Yup.number()
                    .required()
                    .transform(yupParseToInt),
                  video: Yup.string(),
                  description: Yup.string().required(),
                  pricePolicy: Yup.array().of(
                    Yup.object().shape({
                      retailId: Yup.string().required(),
                      unitPrice: Yup.number()
                        .required()
                        .transform(yupParseToInt)
                    })
                  )
                })}
                onSubmit={(values, { setSubmitting }) => {
                  const newProductRequestData = parseNewProductWithImage(
                    agencyId,
                    values,
                    selectedMainImage,
                    galleryImages
                  );
                  updateProduct(newProductRequestData, id);
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 400);
                }}>
                <Form>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <FInput
                        label="Product Name"
                        name="title"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FInput
                        label="Maker"
                        name="brand"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FSelect
                        label="Category"
                        name="category"
                        type="text"
                        placeholder=""
                        options={categoryOptions}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FSelect
                        label="Origin"
                        name="origin"
                        type="text"
                        placeholder=""
                        options={countryOptions}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                      <FInput
                        label="Price"
                        name="unitPrice"
                        type="number"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                      <FInput
                        label="Movie Url"
                        name="video"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <FInput
                        label="Product Introduction"
                        name="description"
                        maxLength={500}
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <FieldArray
                        name="pricePolicy"
                        render={arrayHelpers => (
                          <div>
                            {formikCurrent.current &&
                              formikCurrent.current.values &&
                              formikCurrent.current.values.pricePolicy.map(
                                (friend, index) => (
                                  <GridContainer key={index}>
                                    <GridItem xs={12} sm={5} md={5}>
                                      <FSelect
                                        options={retailersOptions}
                                        label="Retailer"
                                        name={`pricePolicy.${index}.retailId`}
                                      />
                                    </GridItem>
                                    <GridItem xs={8} sm={4} md={4}>
                                      <FInput
                                        label="Price"
                                        name={`pricePolicy.${index}.unitPrice`}
                                        type="number"
                                        placeholder=""
                                      />
                                    </GridItem>

                                    <GridItem xs={4} sm={3} md={3}>
                                      <Button
                                        color="rose"
                                        onClick={() => {
                                          arrayHelpers.remove(index);
                                        }}
                                        type="button">
                                        Remove Policy
                                      </Button>
                                    </GridItem>
                                  </GridContainer>
                                )
                              )}

                            <GridContainer>
                              <GridItem xs={12} sm={12} md={12}>
                                <Button
                                  color="primary"
                                  onClick={() =>
                                    arrayHelpers.push({
                                      retailId: "",
                                      unitPrice: ""
                                    })
                                  }
                                  type="button">
                                  Add new Price Policy
                                </Button>
                              </GridItem>
                            </GridContainer>
                          </div>
                        )}
                      />
                    </GridItem>
                  </GridContainer>

                  <Button
                    disabled={!selectedMainImage}
                    color="rose"
                    className={classes.actionButton}
                    type="submit">
                    Submit
                  </Button>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" icon>
                <h4 className={classes.cardIconTitle}>
                  {`Main Image `}
                  <span style={extraStyles.required}>
                    (Require to add/update product)
                  </span>
                </h4>
              </CardHeader>
              <CardBody>
                {selectedMainImage && (
                  <div style={extraStyles.galleryContainer}>
                    <img
                      src={selectedMainImage.mediumUrl}
                      title={selectedMainImage.title}
                      style={extraStyles.galleryImage}
                      alt={selectedMainImage.title}
                    />
                  </div>
                )}
                <Button
                  onClick={() => {
                    setMainImageModalOpenState(true);
                  }}>
                  Add Photo
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" icon>
                <h4 className={classes.cardIconTitle}>Gallery</h4>
              </CardHeader>
              <CardBody>
                {galleryImages.length > 0 && (
                  <div style={extraStyles.galleryContainer}>
                    {galleryImages.map(item => (
                      <img
                        key={item.id}
                        src={item.mediumUrl}
                        title={item.title}
                        style={extraStyles.galleryImage}
                        alt={item.title}
                      />
                    ))}
                  </div>
                )}
                <Button
                  onClick={() => {
                    setGalleryModalOpenState(true);
                  }}>
                  Add Photo
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridItem>
      </GridContainer>

      <Dialog
        open={isMainImageModalOpen}
        onClose={closeMainImageModal}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="lg">
        <DialogTitle id="form-dialog-title">Main Image Selection</DialogTitle>
        <DialogContent>
          <ProductMainImageModal
            currentImageId={selectedMainImage?.id}
            onSubmit={item => setSelectedTmpMainImage(item)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeMainImageModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setSelectedMainImage(selectedTmpMainImage);
              setMainImageModalOpenState(false);
            }}
            color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={isGalleryModalOpen}
        onClose={closeGalleryModal}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="lg">
        <DialogTitle id="form-dialog-title">
          Gallery Images Selection
        </DialogTitle>
        <DialogContent>
          <ProductGalleryModal
            pickedImages={galleryImages.map(item => item.id)}
            onSubmit={items => setSelectedTmpGalleryImages(items)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeGalleryModal} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setGalleryImages(selectedTmpGalleryImages);
              setGalleryModalOpenState(false);
            }}
            color="primary">
            Import
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state => ({
  image: getAddingProductImage(state),
  userId: getUserIdSelector(state),
  agencyId: getAgencyIdSelector(state),
  updatingProduct: getUpdatingProduct(state),
  retailers: getRetailersSelector(state),
  retailersHasNext: getRetailersHasNextSelector(state)
});
export default connect(
  mapStateToProps,
  {
    addProduct,
    addImage,
    updateProduct,
    resetUpdateProduct,
    getRetailersAction,
    pickUpdateProduct
  }
)(withStyles(styles)(UpdateProductPage));
