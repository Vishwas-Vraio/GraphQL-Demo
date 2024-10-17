import { RESTDataSource } from "@apollo/datasource-rest";
import { ProfileContactMapResponse } from "../types"

export class ProfileContactAPI extends RESTDataSource {
  // the Catstronauts catalog is hosted on this server
  baseURL = "http://localhost:3004/";
  
  getProfileContactMap(profileId: string) {
    return this.get<ProfileContactMapResponse[]>(`profile-contact/profile/${profileId}`);
  }
}
