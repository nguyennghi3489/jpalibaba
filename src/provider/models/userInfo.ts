import { UserBasicInfo } from "./userBasicInfo";
import { Address } from "./address";
import { UserInfoResponse } from "./commonType";

class UserInfo {
  basicInfo: UserBasicInfo;
  agencyAddress: Address;
  shippingAddress: Address;
  constructor(
    basicInfo: UserBasicInfo,
    agencyAddress: Address,
    shippingAddress: Address
  ) {
    this.basicInfo = basicInfo;
    this.agencyAddress = agencyAddress;
    this.shippingAddress = shippingAddress;
  }
  static fromApi(data: UserInfoResponse) {}
}
