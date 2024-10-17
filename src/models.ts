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

export type ContactModel = {
  contactId: string;
  contactValue: string;
  contactType: string;
}

export type ProfileAddressModel = {
  profileId: string;
  addressId: string;
  isDefault: string;
}

export type UserModel = {
  id: string;
  name: string;
  username: string;
  email: string;
}

export type CommentModel = {
  postId: string;
  id: string;
  body: string;
}

export type PostModel = {
  userId: string;
  id: string;
  title: string;
}

export type TodoModel = {
  userId: string;
  id: string;
  title: string;
}
