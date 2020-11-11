import React from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { FInput } from "components/Form/FInput";
import withStyles from "@material-ui/core/styles/withStyles";
import { FSelect } from "components/Form/FSelect";
import { agencyOptions, categoryOptions, countryOptions } from "constant";
import Button from "components/CustomButtons/Button.js";

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
};

class ProductStep extends React.Component {
  constructor(props) {
    super(props);
    this.formik = React.createRef();
  }
  sendState() {
    return this.formik.values;
  }

  isValidated = async () => {
    this.formik.submitForm();
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    if (this.formik.isValid) {
      return true;
    }
    return false;
  };

  render() {
    const { classes } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12}>
          <h4 className={classes.infoText}>Product Information</h4>
        </GridItem>
        <GridItem xs={12} sm={8}>
          <Formik
            innerRef={(formik) => (this.formik = formik)}
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
              <FInput
                label="Product Name"
                name="productName"
                type="text"
                placeholder=""
              />
              <FInput label="Marker" name="brand" type="text" placeholder="" />
              <FSelect
                label="Category"
                name="category"
                type="text"
                placeholder=""
                options={categoryOptions}
              />
              <FSelect
                label="Origin"
                name="origin"
                type="text"
                placeholder=""
                options={countryOptions}
              />
              <FInput label="Price" name="price" type="number" placeholder="" />
              <FInput
                label="Movie Url"
                name="movieUrl"
                type="text"
                placeholder=""
              />
              <FInput
                label="Product Introduction"
                name="productIntroduction"
                type="text"
                placeholder=""
              />
              <FieldArray
                name="pricePolicy"
                render={(arrayHelpers) => (
                  <div>
                    {this.formik.values &&
                      this.formik.values.pricePolicy.map((friend, index) => (
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
                              Remove
                            </Button>
                          </GridItem>
                        </GridContainer>
                      ))}

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
            </Form>
          </Formik>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(style)(ProductStep);
