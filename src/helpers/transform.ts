import moment from "moment";

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
  console.log(input);

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
    shippingPostalCode,
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
      zipCode: shippingPostalCode,
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
    category: input.category,
    owner: userId,
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
    category: input.category,
    owner: userId,
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
  userId: string
) => ({
  agencyId: agencyId,
  productId: input.productId,
  category: input.categoryId,
  title: "", /// We don't use campaign Name and campaign Introduction any more then we temporary set empty here. Wait BE update later
  owner: userId,
  description: "",
  goal: parseInt(input.minimumOrderToImport, 10),
  minAmountPerOrder: parseInt(input.minimumOrderlot, 10),
  startDate: input.toggleStartDate ? moment().hour(1) : input.startDate,
  endDate: input.endDate,
});
