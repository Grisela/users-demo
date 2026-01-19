export interface IUserResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserResponseAddress;
  phone: string;
  website: string;
  company: IUserResponseCompany;
}
export interface IUserResponseCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface IUserResponseAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IUserResponseGeo;
}
export interface IUserResponseGeo {
  lat: string;
  lng: string;
}

export interface IUserState {
  userList: IUserResponse[];
}
