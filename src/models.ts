export type ProfileModel = {
  profileId: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  dateOfBirth: string;
  status: string;
  createdBy: string;
  modifiedBy: string;
};

export type AddressModel = {
  addressId: string;
  addressLineOne: string;
  addressLineTwo: string;
  addressLineThree: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  latitude: string;
  longitude: string;
  createdBy?: string;
  modifiedBy?: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type ProfileAddressModel = {
  profileId: string;
  addressId: string;
  isDefault: string;
}