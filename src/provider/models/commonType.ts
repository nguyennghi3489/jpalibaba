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
  images: string[];
  created: string;
  modified: string;
}
