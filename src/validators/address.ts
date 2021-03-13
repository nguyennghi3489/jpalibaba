import * as Yup from "yup";
import { ADDRESS_REGEX, ONLY_ALPHABET, VIETNAM_PHONE } from "helpers";

export const addressValidationSchemaInitialValue = {
  firstName: "",
  lastName: "",
  phone: "",
  zipCode: "",
  street1: "",
  street2: "",
  city: "",
  country: "",
};
export const addressValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("Required")
    .matches(ONLY_ALPHABET, "Firstname is invalid"),
  lastName: Yup.string()
    .required("Required")
    .matches(ONLY_ALPHABET, "Lastname is invalid"),
  phone: Yup.string()
    .required("Required")
    .matches(VIETNAM_PHONE, "phone is invalid"),
  zipCode: Yup.number().required("Required"),
  street1: Yup.string()
    .required("Required")
    .matches(ADDRESS_REGEX, "street1 is invalid"),
  street2: Yup.string().matches(ADDRESS_REGEX, "street2 is invalid"),
  city: Yup.string()
    .required("Required")
    .matches(ONLY_ALPHABET, "city is invalid"),
  country: Yup.string()
    .required("Required")
    .matches(ONLY_ALPHABET, "city is invalid"),
});
