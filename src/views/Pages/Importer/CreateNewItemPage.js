import React from "react";
import { connect } from "react-redux";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import { validate, ProductItemSchema } from "helpers";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import PictureUpload from "components/CustomUpload/PictureUpload";
import Danger from "components/Typography/Danger.js";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import productPlaceHolder from "assets/img/product-placeholder.jpeg";
import { addProduct, updateProduct, addImage } from "provider/actions";
import { parseNewProduct, parseUpdateProduct } from "helpers";
import {
  required,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
  convertStateFieldToValidatorField,
} from "helpers";

import {
  getAddingProductImage,
  getUserIdSelector,
  getAgencyIdSelector,
  getProductList,
  getUpdatingProduct,
} from "provider/selectors";

class CreateNewItemPage extends React.Component {
  state = {
    productName: "",
    ["productName" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["productName" + fieldValidatorSuffix]: [required],
    brand: "",
    ["brand" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["brand" + fieldValidatorSuffix]: [required],
    category: "",
    ["category" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    origin: "",
    ["origin" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    price: "",
    ["price" + fieldStateSuffix]: FieldValidateStatus.Undefined,
    ["price" + fieldValidatorSuffix]: [required],
    movieUrl: "",
    introduction: "",
    changeImage: false,
    validateResult: "",
  };

  setValidateResult = (validateResult) => {
    this.setState({ validateResult });
  };

  componentDidMount() {
    const { updatingProduct } = this.props;
    if (updatingProduct) {
      this.setState({
        productName: updatingProduct.title,
        ["productName" + fieldStateSuffix]: FieldValidateStatus.Success,
        brand: updatingProduct.brand,
        ["brand" + fieldStateSuffix]: FieldValidateStatus.Success,
        category: updatingProduct.category,
        origin: updatingProduct.origin,
        price: updatingProduct.unitPrice,
        ["price" + fieldStateSuffix]: FieldValidateStatus.Success,
        movieUrl: updatingProduct.video,
        aboutMe: updatingProduct.description,
      });
    }
  }

  onMainUpload = (file) => {
    this.props.addImage(file);
    this.setState({ changeImage: true });
  };

  onThumbsUpload = (file) => {
    const thumbs = Object.assign([], this.state.imageThumbs);
    thumbs.push(file);
    this.setState({ imageThumbs: thumbs });
  };

  change = (value, stateName) => {
    const validatorField = stateName + fieldValidatorSuffix;
    const validators = this.state[validatorField];
    if (validators) {
      const validateValue = validators.reduce((result, fn) => {
        if (typeof fn === "function") {
          return result && fn(value);
        }
        return result && fn[0](this.state[fn[1]])(value);
      }, true);
      if (validateValue) {
        this.setState({
          [stateName + fieldStateSuffix]: FieldValidateStatus.Success,
        });
      } else {
        this.setState({
          [stateName + fieldStateSuffix]: FieldValidateStatus.Fail,
        });
      }
    } else {
      this.setState({
        companyStreet2FState: FieldValidateStatus.Success,
      });
    }
    this.setState({ [stateName]: value });
  };

  isValidated = () => {
    let flag = true;

    const validatingStateFields = getFormStateField(this.state);
    for (const index in validatingStateFields) {
      const obj = validatingStateFields[index];
      const value = Object.values(obj)[0];
      const key = Object.keys(obj)[0];
      const validatorField = convertStateFieldToValidatorField(key);
      const validators = this.state[validatorField];
      if (value !== FieldValidateStatus.Success && validators) {
        this.setState({ [key]: FieldValidateStatus.Fail });
        flag = false;
      }
    }
    return flag;
  };

  submit = async () => {
    // const { image, agencyId, userId } = this.props;
    const {
      productName,
      brand,
      category,
      origin,
      price,
      movieUrl,
      introduction,
    } = this.state;

    // const validateResult = await validate(
    //   {
    //     productName,
    //     brand,
    //     category,
    //     origin,
    //     price,
    //     movieUrl,
    //     introduction,
    //   },
    //   ProductItemSchema
    // );
    // if (validateResult instanceof ValidationError) {
    //   console.log(validateResult);
    //   this.setValidateResult(validateResult);
    // } else {
    //   this.setValidateResult("");
    //   // authenticate(email.trim(), password);
    // }

    // if (this.isValidated()) {
    //   if (!this.props.updatingProduct) {
    //     this.props.addProduct(
    //       parseNewProduct(this.state, image, agencyId, userId)
    //     );
    //   } else {
    //     if (!this.state.changeImage) {
    //       this.props.updateProduct(
    //         parseUpdateProduct(this.state, null, agencyId, userId),
    //         this.props.updatingProduct.id
    //       );
    //     } else {
    //       this.props.updateProduct(
    //         parseUpdateProduct(this.state, image, agencyId, userId),
    //         this.props.updatingProduct.id
    //       );
    //     }
    //   }
    // }
  };

  // productName,
  // brand,
  // category,
  // origin,
  // price,
  // movieUrl,
  // introduction,

  render() {
    const { classes } = this.props;
    const { validateResult } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardBody>
                <Formik
                  initialValues={{ productName: "", brand: "", price: "" }}
                  validationSchema={Yup.object({
                    productName: Yup.string().required(
                      "ProductName is Required Field"
                    ),
                    brand: Yup.string().required("Brand is Required Field"),
                    price: Yup.number().required("Price is Required Field"),
                  })}
                  onSubmit={(values, { setSubmitting }) => {
                    console.log("HERER");
                    setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                      setSubmitting(false);
                    }, 400);
                  }}
                >
                  <Form>
                    <FInput
                      label="Product Name"
                      name="productName"
                      type="text"
                    />
                    <FSelect label="Category" name="category">
                      <option value="">Select a job type</option>
                      <option value="designer">Designer</option>
                      <option value="development">Developer</option>
                      <option value="product">Product Manager</option>
                    </FSelect>
                    <FInput label="Brand" name="brand" type="text" />
                    <FInput label="Price" name="price" type="text" />
                    <button type="submit">Submit</button>
                  </Form>
                </Formik>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
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
            {/* <Card>
              <CardHeader color="primary" icon>
                <h4 className={classes.cardIconTitle}>Thumbs Image</h4>
              </CardHeader>
              <CardBody>
                <CollectionUpload onUpload={this.onThumbsUpload} />
              </CardBody>
            </Card> */}
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  image: getAddingProductImage(state),
  userId: getUserIdSelector(state),
  agencyId: getAgencyIdSelector(state),
  products: getProductList(state),
  updatingProduct: getUpdatingProduct(state),
});
export default connect(
  mapStateToProps,
  { addProduct, addImage, updateProduct }
)(withStyles(styles)(CreateNewItemPage));
