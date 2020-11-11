import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, FieldArray } from "formik";
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

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

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
import { agencyOptions, categoryOptions, countryOptions } from "constant";
import { GalleryModal } from "./Gallery/Modal";

const CreateNewItemPage = ({ classes }) => {
  const [modalStatus, setModalStatus] = useState(false);
  const formikCurrent = useRef(null);

  console.log(formikCurrent.current);
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardBody>
              <Formik
                innerRef={formikCurrent}
                initialValues={{
                  productName: "",
                  category: "",
                  brand: "",
                  origin: "",
                  price: "",
                  movieUrl: "",
                  productIntroduction: "",
                  pricePolicy: [],
                }}
                validationSchema={Yup.object({
                  productName: Yup.string().required(),
                  category: Yup.string().required(),
                  brand: Yup.string().required(),
                  origin: Yup.string().required(),
                  price: Yup.string().required(),
                  movieUrl: Yup.string().required(),
                  productIntroduction: Yup.string().required(),
                  pricePolicy: Yup.array().of(
                    Yup.object().shape({
                      retailerId: Yup.string().required(),
                      price: Yup.string().required(),
                    })
                  ),
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
                    <GridItem xs={12} sm={12}>
                      <FieldArray
                        name="pricePolicy"
                        render={(arrayHelpers) => (
                          <div>
                            {formikCurrent.current &&
                              formikCurrent.current.values &&
                              formikCurrent.current.values.pricePolicy.map(
                                (friend, index) => (
                                  <GridContainer key={index}>
                                    <GridItem xs={12} sm={5} md={5}>
                                      <FSelect
                                        options={agencyOptions}
                                        label="Retailer"
                                        name={`pricePolicy.${index}.retailerId`}
                                        type="text"
                                        placeholder=""
                                      />
                                    </GridItem>
                                    <GridItem xs={8} sm={4} md={4}>
                                      <FInput
                                        label="Price"
                                        name={`pricePolicy.${index}.price`}
                                        type="text"
                                        placeholder=""
                                      />
                                    </GridItem>

                                    <GridItem xs={4} sm={3} md={3}>
                                      <Button
                                        color="rose"
                                        onClick={() => {
                                          console.log(index);
                                          arrayHelpers.remove(index);
                                        }}
                                        type="button"
                                      >
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
                                      retailerId: "",
                                      price: "",
                                    })
                                  }
                                  type="button"
                                >
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
          <GridItem xs={12} sm={12} md={12}>
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
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" icon>
                <h4 className={classes.cardIconTitle}>Gallery</h4>
              </CardHeader>
              <CardBody>
                <Button
                  onClick={() => {
                    setModalStatus(true);
                  }}
                >
                  Add Photo
                </Button>
              </CardBody>
            </Card>
          </GridItem>
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
