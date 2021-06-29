import * as Yup from "yup";
import {
  ALPHABET_AND_NUMBER,
  ONLY_ALPHABET,
  ADDRESS_REGEX,
  verifyPhoneNumber,
} from "helpers";

export const agencyValidationObject = Yup.object({
  name: Yup.string()
    .required()
    .matches(ALPHABET_AND_NUMBER),
  representativeName: Yup.string()
    .required()
    .matches(ALPHABET_AND_NUMBER),
  email: Yup.string()
    .required("Required")
    .email("Invalid email"),
  enterpriseNumber: Yup.string()
    .max(10)
    .required("Required"),
  phone: Yup.string()
    .required("Required")
    .test("phone_valid", "phone is invalid", (value) =>
      verifyPhoneNumber(value)
    ),
  address: Yup.string()
    .required("Required")
    .matches(ADDRESS_REGEX),
  city: Yup.string()
    .required("Required")
    .matches(ONLY_ALPHABET),
  zipCode: Yup.string().required("Required"),
});

export const addressValidationObject = Yup.object({
  shippingFirstName: Yup.string()
    .required()
    .matches(ALPHABET_AND_NUMBER),
  shippingLastName: Yup.string()
    .required()
    .matches(ALPHABET_AND_NUMBER),
  shippingPhone: Yup.string()
    .required()
    .test("phone_valid", "phone is invalid", (value) =>
      verifyPhoneNumber(value)
    ),
  shippingStreet1: Yup.string().matches(ADDRESS_REGEX),
  shippingStreet2: Yup.string().matches(ADDRESS_REGEX),
  shippingCountry: Yup.string().required(),
  shippingCity: Yup.string()
    .required()
    .matches(ONLY_ALPHABET),
  shippingZipCode: Yup.string().required(),
});

export const signupInitialValue = {
  name: "",
  representativeName: "",
  email: "",
  enterpriseNumber: "",
  country: "Vietnam",
  phone: "",
  address: "",
  city: "",
  zipCode: "",
  shippingFirstName: "",
  shippingLastName: "",
  shippingPhone: "",
  shippingStreet1: "",
  shippingStreet2: "",
  shippingCountry: "Vietnam",
  shippingCity: "",
  shippingZipCode: "",
};
