import { Address } from "./address";
import { UserInfoResponse } from "./response";
import { UserBasicInfo } from "./userBasicInfo";

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
