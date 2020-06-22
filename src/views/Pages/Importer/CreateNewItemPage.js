import React from "react";
import { connect } from "react-redux";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

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

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import styles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";

import productPlaceHolder from "assets/img/product-placeholder.jpeg";
import { addProduct, updateProduct, addImage } from "provider/actions";
import { parseNewProduct, parseUpdateProduct } from "helpers";
import {
  required,
  isInputValidated,
  getFormStateField,
  fieldStateSuffix,
  fieldValidatorSuffix,
  FieldValidateStatus,
  onInputChange,
  equalField,
  convertStateFieldToValidatorField,
} from "helpers";

import {
  getAddingProductImage,
  getUserIdSelector,
  getAgencyIdSelector,
  getProductList,
  getUpdatingProduct,
} from "provider/selectors";

const useStyles = makeStyles(styles);

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

  submit = () => {
    const { image, agencyId, userId } = this.props;
    if (this.isValidated()) {
      if (!this.props.updatingProduct) {
        this.props.addProduct(
          parseNewProduct(this.state, image, agencyId, userId)
        );
      } else {
        if (!this.state.changeImage) {
          this.props.updateProduct(
            parseUpdateProduct(this.state, null, agencyId, userId),
            this.props.updatingProduct.id
          );
        } else {
          this.props.updateProduct(
            parseUpdateProduct(this.state, image, agencyId, userId),
            this.props.updatingProduct.id
          );
        }
      }
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12}>
                    <CustomInput
                      // success={
                      //   this.state.productNameFState ===
                      //   FieldValidateStatus.Success
                      // }
                      error={
                        this.state.productNameFState ===
                        FieldValidateStatus.Fail
                      }
                      labelText={
                        <span>
                          Product Name <small>(required)</small>
                        </span>
                      }
                      id="productName"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      value={this.state.productName}
                      inputProps={{
                        value: this.state.productName,
                        onChange: (event) =>
                          this.change(event.target.value, "productName"),
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={4}>
                    <CustomInput
                      // success={
                      //   this.state.brandFState === FieldValidateStatus.Success
                      // }
                      error={
                        this.state.brandFState === FieldValidateStatus.Fail
                      }
                      labelText={
                        <span>
                          Brand <small>(required)</small>
                        </span>
                      }
                      id="brand"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.brand,
                        onChange: (event) =>
                          this.change(event.target.value, "brand"),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Choose Category
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu,
                        }}
                        classes={{
                          select: classes.select,
                        }}
                        value={this.state.category}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select",
                          onChange: (event) =>
                            this.change(event.target.value, "category"),
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem,
                          }}
                        >
                          Category
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="Food"
                        >
                          Food
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="ElectronicDevice"
                        >
                          Electronic Device
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={4}>
                    <FormControl
                      fullWidth
                      className={classes.selectFormControl}
                    >
                      <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                      >
                        Choose Origin
                      </InputLabel>
                      <Select
                        MenuProps={{
                          className: classes.selectMenu,
                        }}
                        classes={{
                          select: classes.select,
                        }}
                        value={this.state.origin}
                        inputProps={{
                          name: "simpleSelect",
                          id: "simple-select",
                          onChange: (event) =>
                            this.change(event.target.value, "origin"),
                        }}
                      >
                        <MenuItem
                          disabled
                          classes={{
                            root: classes.selectMenuItem,
                          }}
                        >
                          Origin
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="VietNam"
                        >
                          VietNam
                        </MenuItem>
                        <MenuItem
                          classes={{
                            root: classes.selectMenuItem,
                            selected: classes.selectMenuItemSelected,
                          }}
                          value="Japan"
                        >
                          Japan
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </GridItem>
                  <GridItem xs={12} sm={5}>
                    <CustomInput
                      // success={
                      //   this.state.priceFState === FieldValidateStatus.Success
                      // }
                      error={
                        this.state.priceFState === FieldValidateStatus.Fail
                      }
                      labelText={
                        <span>
                          Price <small>(required)</small>
                        </span>
                      }
                      id="price"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.price,
                        onChange: (event) =>
                          this.change(event.target.value, "price"),
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={5}>
                    <CustomInput
                      labelText="Movie Url"
                      id="movieUrl"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        value: this.state.movieUrl,
                        onChange: (event) =>
                          this.change(event.target.value, "movieUrl"),
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12}>
                    <CustomInput
                      labelText="Product introduction"
                      id="aboutMe"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 5,
                        value: this.state.aboutMe || "",
                        onChange: (event) =>
                          this.change(event.target.value, "aboutMe"),
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <Button
                  color="rose"
                  disabled={!this.props.image}
                  className={classes.createButton}
                  onClick={this.submit}
                >
                  {this.props.updatingProduct ? (
                    <>Update Item</>
                  ) : (
                    <>Create Item</>
                  )}
                </Button>
                <Clearfix />
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
                  value={this.props.image.thumbUrl}
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
