import { Gallery } from "provider/models";

// https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
export const parseJwt = (token: String) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export const parseNewUserInfo = (input: any) => {
  const { type, information, address } = input;

  const { importer } = type;
  const role = importer ? 2 : 3;

  const { confirmPassword, email, firstName, lastName, password } = information;

  const {
    address: agencyAddress,
    city,
    country,
    email: agencyEmail,
    enterpriseNumber,
    name,
    phone,
    representativeName,
    shippingCity,
    shippingCountry,
    shippingFirstName,
    shippingLastName,
    shippingPhone,
    shippingZipCode,
    shippingStreet1,
    shippingStreet2,
    zipCode,
  } = address;

  let agencyInfo = {
    name,
    representativeName,
    email: agencyEmail,
    registrationUrl: "",
    enterpriseNumber,
    phone,
    country,
    address: agencyAddress,
    city,
    zipCode,
  };

  let signupObject = {
    role: role,
    confirmPassword,
    email,
    firstName,
    lastName,
    password,
    agency: agencyInfo,
  };

  let shippingAddress = {};
  if (!importer) {
    shippingAddress = {
      firstName: shippingFirstName,
      lastName: shippingLastName,
      phone: shippingPhone,
      street1: shippingStreet1,
      street2: shippingStreet2,
      city: shippingCity,
      zipCode: shippingZipCode,
      country: shippingCountry,
    };

    signupObject = { ...signupObject, ...{ shippingAddress } };
  }

  return signupObject;
};

export const parseNewProduct = (
  input: any,
  image: string,
  agencyId: string,
  userId: string
) => {
  return {
    agencyId: agencyId,
    owner: userId,
    category: input.category,
    title: input.productName,
    images: [image],
    description: input.aboutMe,
    video: input.movieUrl,
    unitPrice: parseInt(input.price, 10),
    origin: input.origin,
    brand: input.brand,
  };
};

export const parseUpdateProduct = (
  input: any,
  image: string | null,
  agencyId: string,
  userId: string,
  id: string
) => {
  let result = {
    id,
    agencyId: agencyId,
    owner: userId,
    category: input.category,
    title: input.productName,
    description: input.aboutMe,
    video: input.movieUrl,
    unitPrice: parseInt(input.price, 10),
    origin: input.origin,
    brand: input.brand,
  };

  return image ? { ...result, images: [image] } : result;
};

export const parseNewCampaign = (
  input: any,
  agencyId: string,
  userId: string,
  productId: string
) => ({
  agencyId: agencyId,
  owner: userId,
  productId: productId,
  goal: input.goal,
  minAmountPerOrder: input.minAmountPerOrder,
  startDate: input.startDate,
  endDate: input.endDate,
});

export const convertAllToString = (input: any) => {
  let newObject: any = Object.assign({}, input);
  for (const property in newObject) {
    newObject[property] = newObject[property].toString();
  }
  return newObject;
};

export const parseNewProductWithImage = (
  agencyId: string,
  values: any,
  mainImage: Gallery,
  galleryImages: Gallery[]
) => {
  const image = mainImage.id;
  const images = galleryImages.map((item) => item.id);

  return { ...values, image, images, agencyId, owner: agencyId };
};

export const parseNewProductWorkflowData = (
  agencyId: string,
  userId: string,
  values: any
) => {
  const { product, image: imageStep, campaign } = values;

  const image = imageStep.selectedMainImage.id;
  const images = imageStep.galleryImages.map((item: any) => item.id);

  const productObj = {
    ...product,
    agencyId,
    owner: userId,
    image,
    images,
  };
  return { product: productObj, campaign };
};

export const yupParseToInt = (value: string, originValue: string) => {
  return parseInt(value, 10);
};
