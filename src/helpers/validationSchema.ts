import * as yup from "yup";

export let ProductItemSchema = yup.object().shape({
  productName: yup.string().required(),
  brand: yup.string().required(),
  category: yup.string().required(),
  origin: yup.string().required(),
  price: yup.number().required(),
  movieUrl: yup.string(),
  introduction: yup.string(),
});

export let LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(),
  password: yup.string().required(),
});

export const validate = (data: any, schema: yup.ObjectSchema) => {
  return schema.validate(data, { abortEarly: false }).catch(function(err) {
    return err;
  });
};
