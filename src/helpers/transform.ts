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

  const {
    contactEmail,
    contactPersonFirstName,
    contactPersonLastName,
    password,
    confirmPassword,
    companyName,
  } = information;

  const {
    companyCity,
    companyCountry,
    companyPostalCode,
    companyStreet1,
    companyStreet2,
    shippingCity,
    shippingCountry,
    shippingPostalCode,
    shippingStreet1,
    shippingStreet2,
  } = address;

  let agencyAddress = {};
  if (importer) {
    agencyAddress = {
      city: companyCity,
      country: companyCountry,
      zipCode: companyPostalCode,
      street1: companyStreet1,
      street2: companyStreet2,
    };
  }

  const signupObject = {
    role: role,
    email: contactEmail,
    firstName: contactPersonFirstName,
    lastName: contactPersonLastName,
    password: password,
    confirmPassword: confirmPassword,
    agency: {
      name: companyName,
      ...agencyAddress,
    },
    shippingAddress: {
      street1: shippingStreet1,
      street2: shippingStreet2,
      city: shippingCity,
      zipCode: shippingPostalCode,
      country: shippingCountry,
    },
  };

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
  title: input.campaignName,
  owner: userId,
  description: input.campaignIntro,
  goal: parseInt(input.minimumOrderToImport, 10),
  minAmountPerOrder: parseInt(input.minimumOrderlot, 10),
  startDate: input.startDate,
  endDate: input.endDate,
});
