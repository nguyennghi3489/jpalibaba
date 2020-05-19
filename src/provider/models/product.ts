export class Product {
  productName: string;
  maker: string;
  categoryId: string;
  zoneId: string;
  price: string;
  certification: string;
  movieUrl: string;
  introduction: string;
  mainImage: File;
  thumbsImage: File[];
  constructor(
    productName: string,
    maker: string,
    categoryId: string,
    zoneId: string,
    price: string,
    certification: string,
    movieUrl: string,
    introduction: string,
    mainImage: File,
    thumbsImage: File[]
  ) {
    this.productName = productName;
    this.maker = maker;
    this.categoryId = categoryId;
    this.zoneId = zoneId;
    this.price = price;
    this.certification = certification;
    this.movieUrl = movieUrl;
    this.introduction = introduction;
    this.mainImage = mainImage;
    this.thumbsImage = thumbsImage;
  }
}
