import { RESTDataSource } from "@apollo/datasource-rest";
import { ProfileAddressModel } from "../models";
import { ProfileAddressMapResponse } from "../types";
import { ProfileAddressMap } from "../types";

export class ProfileAdressMapAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://localhost:3003/";

  getProfileAddressMap(profileId: string) {
    return this.get<ProfileAddressMapResponse[]>(`profile-address/profile/${profileId}`);
  }

  createProfileAddressMap(profileAddressMap: ProfileAddressMap) {
    return this.post<ProfileAddressMap>(`profile-address`, {
      body: profileAddressMap,
    });
  }
}
