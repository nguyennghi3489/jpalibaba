export interface ResponseMessage<T> {
  message: T;
}
export interface Token {
  token: string;
}
export interface Error {
  error: string[];
}

export type SimpleResponse<T> = ResponseMessage<T> | Error;
export type TokenResponse = Token | Error;

export interface ResponseWithBooleanResult {
  result: boolean;
}

export interface ResponseWithStringResult {
  result: string;
}

export interface ProductListResponse {
  products: {
    totalCount: number;
    entities: ProductResponse[];
  };
}

export interface PaginationResponse<T> {
  products: {
    totalCount: number;
    entities: T[];
  };
}

export interface ProductResponse {
  id: string;
  agencyId: string;
  category: string;
  title: string;
  brand: string;
  origin: string;
  unitPrice: string;
  owner: string;
  video: string;
  description: string;
  images: ImageResponse[];
  created: string;
  modified: string;
}
export interface CampaignResponse {
  id: string;
  agencyId: string;
  category: string;
  title: string;
  description: string;
  owner: string;
  goal: number;
  minAmountPerOrder: number;
  currentAmountOfOrders: number;
  start: string;
  expiry: string;
  closed: null | string;
  created: string;
  modified: null | string;
  activated: boolean;
  product: ProductResponse;
}

export interface ImageResponse {
  created: string;
  key: string;
  largeUrl: string;
  mediumUrl: string;
  originalUrl: string;
  productId: string;
  thumbUrl: string;
}

export interface UserInfoResponse {
  userProfile: {
    user: UserBasicInfoResponse;
    agency: AgencyResponse;
    shippingAddress: AddressResponse[];
  };
}

export interface AddressResponse {
  id: string;
  agencyId: string;
  userId: string;
  street1: string;
  street2: string;
  city: string;
  zipCode: string;
  country: string;
  active: boolean;
}

export interface AgencyResponse {
  id: string;
  name: string;
  country: string;
  city: string;
  zipCode: string;
  activated: boolean;
}

export interface UserBasicInfoResponse {
  companyName: string;
  representativeName: string;
  registrationFile: File | null;
  enterpriseNumber: string;
  contactPerson: string;
  contactEmail: string;
  contactTel: string;
}

export type CampaignListResponse = PaginationResponse<CampaignResponse>;
