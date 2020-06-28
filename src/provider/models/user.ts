import moment, { Moment } from "moment";

export const RETAILER = 3;
export const IMPORTER = 2;
export const ADMIN = 1;

export class User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  isActive: boolean;
  isMailVerified: boolean;
  created: Moment;
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: string,
    isActive: boolean,
    isMailVerified: boolean,
    created: Moment
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.role = role;
    this.isActive = isActive;
    this.isMailVerified = isMailVerified;
    this.created = created;
  }

  static fromApi(data: any) {
    return new User(
      data.id,
      data.firstName,
      data.lastName,
      data.email,
      data.role,
      data.activated,
      data.emailVerified,
      moment(data.created, "YYYY-MM-DD")
    );
  }
}
