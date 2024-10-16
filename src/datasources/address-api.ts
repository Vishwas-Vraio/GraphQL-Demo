import { RESTDataSource } from "@apollo/datasource-rest";
import { AddressModel } from "../models"
import { AddressInput } from "../types";

export class AddressAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://localhost:3002/";
  
  getAddress(addressId: string) {
    return this.get<AddressModel>(`address/${addressId}`);
  }

  createAddress(addressInput: AddressInput) {
    return this.post<AddressModel>(`address`, {
      body: addressInput,
    });
  }

}
