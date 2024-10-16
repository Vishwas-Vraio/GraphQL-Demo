import { RESTDataSource } from "@apollo/datasource-rest";
import { ProfileModel } from "../models";
import { ProfileInput } from "../types";

export class ProfileAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://localhost:3001/";

  getProfile(profileId: string) {
    return this.get<ProfileModel>(`/profile/id/${profileId}`);
  }

  createProfile(profileInput: ProfileInput) {
    return this.post<ProfileModel>(`profile`, {
      body: profileInput,
    });
  }
}
