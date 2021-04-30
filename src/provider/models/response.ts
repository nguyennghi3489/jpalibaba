import { Address } from "./address";

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
  owner: string;
  title: string;
  brand: string;
  origin: string;
  unitPrice: string;
  video: string;
  description: string;
  image: ImageResponse;
  images: ImageResponse[];
  created: string;
  modified: string;
  campaignListCount: number;
  pricePolicyList: PricePolicyResponse[];
}

export interface CampaignAdminResponse {
  title: string;
  activated: boolean;
  agencyId: string;
  closed: null | string;
  created: string;
  currentAmountOfOrders: number;
  expiry: string;
  goal: number;
  id: string;
  minAmountPerOrder: number;
  modified: null | string;
  start: string;
}

export interface CampaignResponse {
  id: string;
  goal: number;
  minAmountPerOrder: number;
  currentAmountOfOrders: number;
  activated: boolean;
  expiry: string;
  start: string;
  closed: null | string;
  created: string;
  modified: string;
  product: ProductResponse;
}

export interface ImageResponse {
  id: string;
  title: string;
  fileName: string;
  originalUrl: string;
  thumbUrl: string;
  mediumUrl: string;
  largeUrl: string;
  created: string;
  agency: string;
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

export interface PricePolicyResponse {
  id: string;
  productId: string;
  retailId: string;
  unitPrice: number;
  name: string;
}
export type CampaignListResponse = PaginationResponse<CampaignResponse>;

export interface OrderResponse {
  id: string;
  retailerId: string;
  importerId: string;
  created: string;
  modified: string;
  quantity: number;
  status: number;
  price: number;
  campaign: CampaignResponse;
  shippingAddress: Address;
  agencyName: string;
}
