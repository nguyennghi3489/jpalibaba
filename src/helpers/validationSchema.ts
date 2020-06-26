import * as yup from "yup";

export let schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email(),
  password: yup.string().required(),
});

export const validate = (data: any) => {
  return schema.validate(data, { abortEarly: false }).catch(function(err) {
    console.log(err);
    return err;
  });
};
