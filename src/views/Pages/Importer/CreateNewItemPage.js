import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import { FSelect } from "components/Form/FSelect";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import PictureUpload from "components/CustomUpload/PictureUpload";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import productPlaceHolder from "assets/img/product-placeholder.jpeg";
import {
  addProduct,
  updateProduct,
  addImage,
  resetUpdateProduct,
} from "provider/actions";

import {
  getAddingProductImage,
  getUserIdSelector,
  getAgencyIdSelector,
  getProductList,
  getUpdatingProduct,
} from "provider/selectors";
import { FInput } from "components/Form/FInput";
import { categoryOptions, countryOptions } from "constant";
import { GalleryModal } from "./Gallery/Modal";

const CreateNewItemPage = ({ classes }) => {
  const [modalStatus, setModalStatus] = useState(false);
  // onMainUpload = (file) => {
  //   this.props.addImage(file);
  //   this.setState({ changeImage: true });
  // };

  // onThumbsUpload = (file) => {
  //   const thumbs = Object.assign([], this.state.imageThumbs);
  //   thumbs.push(file);
  //   this.setState({ imageThumbs: thumbs });
  // };

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <Formik
                initialValues={{
                  productName: "",
                  category: "",
                  brand: "",
                  origin: "",
                  price: "",
                  movieUrl: "",
                  productIntroduction: "",
                }}
                validationSchema={Yup.object({
                  productName: Yup.string().required(),
                  category: Yup.string().required(),
                  brand: Yup.string().required(),
                  origin: Yup.string().required(),
                  price: Yup.string().required(),
                  movieUrl: Yup.string().required(),
                  productIntroduction: Yup.string().required(),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                  }, 400);
                }}
              >
                <Form>
                  <GridContainer>
                    <GridItem xs={12} sm={12}>
                      <FInput
                        label="Product Name"
                        name="productName"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={4}>
                      <FInput
                        label="Marker"
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
                        name="price"
                        type="number"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6}>
                      <FInput
                        label="Movie Url"
                        name="movieUrl"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12}>
                      <FInput
                        label="Product Introduction"
                        name="productIntroduction"
                        type="text"
                        placeholder=""
                      />
                    </GridItem>
                  </GridContainer>

                  <Button
                    color="rose"
                    className={classes.actionButton}
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </Formik>
            </CardBody>
          </Card>
        </GridItem>
        {/* <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Main Image</h4>
            </CardHeader>
            <CardBody>
              <PictureUpload
                showImage={true}
                image={productPlaceHolder}
                value={this.props.image}
                onUpload={this.onMainUpload}
              />
            </CardBody>
          </Card>
        </GridItem> */}
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary" icon>
              <h4 className={classes.cardIconTitle}>Main Image</h4>
            </CardHeader>
            <CardBody>
              <Button
                onClick={() => {
                  setModalStatus(true);
                }}
              >
                Add Photo
              </Button>
              {/* <PictureUpload
                showImage={true}
                image={productPlaceHolder}
                value={this.props.image}
                onUpload={this.onMainUpload}
              /> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
      <GalleryModal onClose={() => setModalStatus(false)} open={modalStatus} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  image: getAddingProductImage(state),
  userId: getUserIdSelector(state),
  agencyId: getAgencyIdSelector(state),
  products: getProductList(state),
  updatingProduct: getUpdatingProduct(state),
});
export default connect(
  mapStateToProps,
  { addProduct, addImage, updateProduct, resetUpdateProduct }
)(withStyles(styles)(CreateNewItemPage));
