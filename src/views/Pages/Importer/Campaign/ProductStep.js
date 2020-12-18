import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.js";
import { FInput } from "components/Form/FInput";
import { FSelect } from "components/Form/FSelect";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { agencyOptions, categoryOptions, countryOptions } from "constant";
import { FieldArray, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

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
    return true;
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
              title: "",
              category: "",
              brand: "",
              origin: "",
              unitPrice: "",
              video: "",
              description: "",
              pricePolicy: [],
            }}
            validationSchema={Yup.object({
              title: Yup.string().required(),
              category: Yup.string().required(),
              brand: Yup.string().required(),
              origin: Yup.string().required(),
              unitPrice: Yup.string().required(),
              video: Yup.string().required(),
              description: Yup.string().required(),
              pricePolicy: Yup.array().of(
                Yup.object().shape({
                  retailerId: Yup.string().required(),
                  price: Yup.number().required(),
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
                name="title"
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
              <FInput
                label="Price"
                name="unitPrice"
                type="number"
                placeholder=""
              />
              <FInput
                label="Movie Url"
                name="video"
                type="text"
                placeholder=""
              />
              <FInput
                label="Product Introduction"
                name="description"
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
                              name={`pricePolicy.${index}.retailId`}
                              type="text"
                              placeholder=""
                            />
                          </GridItem>
                          <GridItem xs={8} sm={4} md={4}>
                            <FInput
                              label="Price"
                              name={`pricePolicy.${index}.unitPrice`}
                              type="text"
                              placeholder=""
                            />
                          </GridItem>

                          <GridItem xs={4} sm={3} md={3}>
                            <Button
                              color="rose"
                              onClick={() => {
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
